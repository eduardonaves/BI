Ext.define('BI.view.menu.menuTree',{
	extend: 'Ext.tree.Panel',
	xtype: 'menutree',

	initComponent: function(){

		var me = this;

		var TreeStore = Ext.create('Ext.data.TreeStore',{
			root: {
				text: 'Opções',

				expanded: true,
				children:[
					{ text: "Review", leaf: true}
				]
			}
		});

		Ext.applyIf(me,{
			store: TreeStore,
			title: 'Menu de Opções',
			width: 250,
			collapseDirection: 'left',
			collapsed: true,
			animCollapsed: true,
			collapsible: true
		});

		me.callParent(arguments);
	}
})