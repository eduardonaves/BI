Ext.define('BI.model.LayoutDragAndDropModel',{
	extend: 'Ext.data.Model',

	fields: [
		{ 
		   	name: 'id',
		   	type: 'string'
		},
		{
			name: 'tipo',
			type: 'string'
		},
		{
			name: 'name',
			type: 'string'
		}
	]
})