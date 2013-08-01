Ext.define('BI.model.DragAndDropModel',{
	extend: 'Ext.data.Model',

	fields: [
		{ 
		   	name: 'id',
		   	type: 'string'
		},
		{
			name: 'descricao',
			type: 'string'
		},
		{
			name: 'name',
			type: 'string'
		}
	]
})