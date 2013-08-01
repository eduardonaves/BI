Ext.Loader.setConfig({enabled: true});

Ext.application({
    
    name: 'BI',
    appFolder: 'app',
    requires : ['BI.config.Niveis', 'BI.config.Colunas'],
    controllers: [
    			'Menu',
    			'MenuAbas',
    			'TreeGrid'
    ],
    autoCreateViewport: true,

    launch: function() {

    }
});