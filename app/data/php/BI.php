<?php
require_once 'db/BaseBI.php';

class BI extends BaseBI {

    private $valor = null;
    private $data = null;
    protected $table = "bi_vendas";
}

new BI();