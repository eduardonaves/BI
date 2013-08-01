
var myData = [

    {"id":"ID_GRUPO", "descricao":"NOME_GRUPO", "name": "GRUPO"},
    {"id":"ID_EMPRESA", "descricao":"NOME_EMPRESA", "name":"EMPRESA"},
    {"id":"ID_PESSOA", "descricao":"NOME_PESSOA", "name":"PESSOA"},
    {"id":"ID_FUNCIONARIO", "descricao":"NOME_FUNCIONARIO", "name":"FUNCIONARIO"},
    {"id":"ID_MARCA", "descricao":"DESCRICAO_MARCA", "name":"MARCA"},
    {"id":"COD_ITEM", "descricao":"DESCRICAO_ITEM", "name":"ITEM"},
    {"id":"CURVA_ITEM", "descricao":"CURVA_ITEM", "name":"CURVA DE ITEM"}
];

Ext.define('BI.view.componentes.ConfigDragAndDrop', {
    extend: 'Ext.container.Container',
    
    xtype: 'configdrapanddrop',
    requires: ['BI.model.DragAndDropModel'],
    width: 315,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: 5
    },
    
    initComponent: function(){

        var group1 = this.id + 'group1',
            group2 = this.id + 'group2';
            
        this.items = [
            { //primeira grid do drag and drop

                itemId: 'grid1',
                flex: 1,
                xtype: 'grid',
                viewConfig: {
                    plugins: {
                        ptype: 'gridviewdragdrop',
                        dragGroup: group1,
                        dropGroup: group1
                    },
                    listeners: {
                        drop: function(node, data, dropRec, dropPosition) {
                            var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
                        }
                    }
                },
                store: new Ext.data.Store({
                    model: BI.model.DragAndDropModel
                }),

                columns: [
                    {
                        text: 'Configurações', 
                        flex: 1, 
                        sortable: true, 
                        dataIndex: 'name'
                    }
                ],
                stripeRows: true,
                title: 'Minhas Configurações',
                tools: [
                    {
                        type: 'refresh',
                        tooltip: 'Reset both grids',
                        scope: this,
                        handler: this.onResetClick
                    }
                ],
                tbar: [
                    '->',
                     {
                        text: 'Salvar Configurações',
                        action: 'salvarConfig',
                        iconCls: 'save'
                    },
                    {
                        text: 'Gerar Relatório',
                        action: 'geraRelatorio',
                        iconCls: 'gerar'
                    }
                ],
                margins: '0 0 5 0'
            },
            { //segunda grid do drag and drop
                itemId: 'grid2',
                flex: 1,
                xtype: 'grid',
                multiSelect: true,
                viewConfig: {
                    plugins: {
                        ptype: 'gridviewdragdrop',
                        dragGroup: group1,
                        dropGroup: group1
                    },
                    listeners: {
                        drop: function(node, data, dropRec, dropPosition) {
                            var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
                        }
                    }
                },
                store: new Ext.data.Store({
                    model: BI.model.DragAndDropModel,
                    data: myData 
                }),
                columns: [
                    {
                        text: 'Configurações', 
                        flex: 1, 
                        sortable: true, 
                        dataIndex: 'name'
                    }
                ],
                stripeRows: true,
                title: 'Configurações Disponíveis'
            }
        ];

        this.callParent();
    },
    
    onResetClick: function(){
        //refresh source grid
        this.down('#grid2').getStore().loadData(myData);

        //purge destination grid
        this.down('#grid1').getStore().removeAll();
    }
});
