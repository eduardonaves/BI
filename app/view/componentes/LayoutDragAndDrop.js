var myData = BI.config.Colunas.getColunas();


Ext.define('BI.view.componentes.LayoutDragAndDrop', {
    extend: 'Ext.container.Container',
    
    xtype: 'layoutdrapanddrop',
    requires: ['BI.model.LayoutDragAndDropModel'],
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
                    model: BI.model.LayoutDragAndDropModel
                }),

                columns: [
                    {
                        text: 'Colunas', 
                        flex: 1, 
                        sortable: true, 
                        dataIndex: 'name'
                    }
                ],
                stripeRows: true,
                title: 'Minhas Colunas',
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
                    model: BI.model.LayoutDragAndDropModel,
                    data: myData 
                }),
                columns: [
                    {
                        text: 'Colunas', 
                        flex: 1, 
                        sortable: true, 
                        dataIndex: 'name'
                    }
                ],
                stripeRows: true,
                title: 'Colunas Disponíveis'
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
