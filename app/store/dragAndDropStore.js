Ext.define('BI.store.dragAndDropStore',{
	extend: 'Ext.data.Store',
	model		: 'BI.model.dragAndDropModel',
	autoLoad	: true,
	remoteSort	: false,
	storeId		: 'draganddropStore',
	proxy: {
        type: 'ajax',
        url: 'app/data/php/BI.php?action=buscaConfig',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    root: {
        id: 1
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});