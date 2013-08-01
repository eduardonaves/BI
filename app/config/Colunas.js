Ext.define('BI.config.Colunas',{
    singleton : true,
    config : {
        colunas : [
            {"dataIndex":"descricao", "xtype":"treecolumn", "text": "DESCRICAO", "flex" : 1, "sortable":true},
            {"dataIndex":"qtd_item", "text":"QUANTIDADE ITEMS", "sortable":true, "width":200},
            {"dataIndex":"total", "text":"TOTAL", "sortable":true, "width":150}//,
            //{"dataIndex":"dt_emissao", "xtype":"datecolumn", "text":"DATA DE EMISSAO", "sortable":true, "width":150, "format":"d-M-y"}
        ]   
    },
    constructor : function(config){
        this.initConfig(config);
    }
});