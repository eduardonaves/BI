Ext.define('BI.controller.MenuAbas',{
	extend: 'Ext.app.Controller',

	views:['componentes.MenuAbas', 'menu.menuTree','componentes.ConfigDragAndDrop'],

	refs:[{
		ref: 'menuabas',
		selector: 'menuabas'
	},{
		ref: 'menutree',
		selector: 'menutree'
	},{
		ref: 'configdrapanddrop',
		selector: 'configdrapanddrop'
	}]
});