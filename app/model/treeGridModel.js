Ext.define('BI.model.treeGridModel',{
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
			name: 'qtd_item',
			type: 'string'
		},
		/*{
			name: 'dt_emissao',
		},*/
		{
			name: 'total',
			type: 'string'
		}
	]
})