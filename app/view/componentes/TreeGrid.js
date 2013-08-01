Ext.define('BI.view.componentes.TreeGrid',{
	extend: 'Ext.tree.Panel',
	xtype: 'treegrid',

	title: 'Relatório',
    useArrows: true,
    rootVisible: false,
    requires: [Ext.require('BI.store.treeGridStore')],

    initComponent: function() {

    	var me = this;
        var cols = BI.config.Colunas.getColunas();

        Ext.apply(this, {
            store: Ext.create('BI.store.treeGridStore'),
            columns: cols,
            viewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop',
                    containerScroll: true
                }
            }
        }); 
        
    	me.callParent(arguments);
    }
});