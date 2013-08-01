Ext.define('BI.store.treeGridStore',{
	extend: 'Ext.data.TreeStore',
	model		: 'BI.model.treeGridModel',
	autoLoad	: true,
	remoteSort	: false,
	storeId		: 'treeGridStore',
	proxy: {
        type: 'ajax',
        url: 'app/data/php/BI.php?action=busca',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    root: {
        id: 1
    },
    listeners: {
        'beforeexpand': function(node){
            BI.config.Niveis.setIdNivelAtual(BI.config.Niveis.getIdNivelAtual() == 0 ? 0 : node.raw.idNivelAtual);
        },
        'beforeload': function(store, operation, eOpts){

            var idNivelAtual = BI.config.Niveis.getIdNivelAtual();
            var rowsNiveis = BI.config.Niveis.getNiveis();
            var rowAnterior = idNivelAtual-1;
            var rowNivelAtual = rowsNiveis[idNivelAtual]
            
            var strParam = operation.id;
            var rowsParam = strParam.split('|');

            var valorParam = rowsParam[rowsParam.length-1];

            //var wheres = rowNivelAtual.where;
            // Se for diferente do primeiro nível
            if(idNivelAtual > 1){
                var wheres = rowNivelAtual.where;            
                //verifica se ja tem where para aquele nivel
                Ext.each(wheres, function(where, idx){

                    //se tiver deleta e coloca o do click atual
                    if(where.id_referencia == rowsNiveis[rowAnterior].id){
                        wheres.splice(idx,1);
                    }
                });

                //pega todos os wheres anteriores é coloca no atual
                Ext.each(rowsNiveis[rowAnterior].where, function(whereAnt){
                    wheres.push({id_referencia: whereAnt.id_referencia, valor: whereAnt.valor});
                });

                wheres.push({id_referencia: rowsNiveis[rowAnterior].id, valor: valorParam});

                rowNivelAtual.where = wheres;
            }

            store.proxy.extraParams.leaf = idNivelAtual+1 == rowsNiveis.length ? true : false;
            store.proxy.extraParams.idNivelAtual = idNivelAtual+1;
            store.proxy.extraParams.nivel = Ext.encode(rowNivelAtual);

            // Incrementa o id do nivel atual
            BI.config.Niveis.setIdNivelAtual(idNivelAtual+1);

        }
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});