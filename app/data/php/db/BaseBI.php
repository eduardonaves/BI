<?php

abstract class BaseBI {

    protected $id = null;
    protected $database = null;
    protected $table = null;

    public function __construct() {

        if (method_exists($this, $_GET['action'])) {
            call_user_func(array($this, $_GET['action']));
        }
    }


    public function busca() {       

        $id = json_decode($_GET['node']);
        $data = json_decode($_GET['nivel']);

        $colunas = $data->colunas;
        $wheres = array();

        $sqlwhere = "";
        $bindParam = array();

        // Se tiver setado o where configura ele
        if(isset($data->where))
        {   
            foreach ($data->where as $key => $and) {
                $sqlwhere .= " AND " . $and->id_referencia . " = :" . $and->id_referencia;
                $bindParam[$and->id_referencia] = $and->valor;
            }
        }

        $sql = " select {$colunas}, "
             . "  count(V_QTDE_ITEM) as QTDITEMS, "
             . "   sum(V_VALOR_CONTABIL_ITEM) as TOTALMARCA"
             . "  from bi_vendas "
             . " where 1=1 " .$sqlwhere
             . " group by {$colunas} "
             . " order by QTDITEMS DESC";

        $conn = oci_connect('js', 'js', 'localhost/XE');

        $stid = oci_parse($conn, $sql);

        foreach ($bindParam as $key => $value) {

            oci_bind_by_name($stid, $key, $bindParam[$key]);
        }
         

        oci_execute($stid);

        $Arrdata = array();

        while (($row = oci_fetch_array($stid, OCI_BOTH))) 
        {
            foreach ($row as $key => $value) {
            
                $Arrdata[] = array(
                    'leaf' => $_GET['leaf'], 
                    'id' => md5($data->descricao . date("Y-m-d H:i:s")) . "|" . $row[$data->id], 
                    'idNivelAtual' => (int) $_GET['idNivelAtual'],
                    'descricao' => $row[$data->descricao], 
                    'qtd_item' => $row['QTDITEMS'],
                    'total' => $row['TOTALMARCA']
                );
            }
        }       

        echo json_encode(array(
            "data" => $Arrdata,
            "param" => $data,
            "success" => true
        ));
    }
}