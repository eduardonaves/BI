Ext.define('BI.view.menu.menuConfig',{
	extend: 'Ext.panel.Panel',
	xtype: 'menuconfig',

	initComponent: function(){

		var me = this;

		Ext.applyIf(me,{
			
			title: 'Menu de Configurações',
			width: 340,
			collapseDirection: 'left',
			collapsed: true,
			animCollapsed: true,
			collapsible: true,
			items: [{               // Results grid specified as a config object with an xtype of 'grid'
		        xtype: 'menuabas'                                // Use 1/3 of Container's height (hint to Box layout
		    }]
		});

		me.callParent(arguments);
	}
})