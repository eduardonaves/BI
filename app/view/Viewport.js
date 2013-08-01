Ext.define('BI.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
            layout: 'border',
            items: [{
                region: 'west',
                xtype: 'menuconfig'
            },{
                region: 'center',
                //xtype: 'treegrid'
                xtype: 'relatorioabas'
            }]
        });

        me.callParent(arguments);
    }

});
