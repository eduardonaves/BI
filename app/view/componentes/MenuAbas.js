Ext.define('BI.view.componentes.MenuAbas',{
	extend: 'Ext.tab.Panel',
	xtype: 'menuabas',

	initComponent: function(){

		var me = this;

		var configMenu = Ext.create('BI.view.componentes.ConfigDragAndDrop');
		var configLayout = Ext.create('BI.view.componentes.LayoutDragAndDrop');

		Ext.applyIf(me,{
			items:[{
       			 title: 'Configurações do Relatório',
       			 bdoyPadding: 10,
       			 items:[configMenu]
   			 },{
		         title: 'Configurações de Layout',
       			 bdoyPadding: 10,
       			 items:[configLayout]
		     }]
		});

		me.callParent(arguments);
	}
})
