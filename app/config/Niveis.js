Ext.define('BI.config.Niveis',{
    singleton : true,
    config : {
    	idNivelAtual: 0,
        niveis : {
        	0 : {
        		colunas: 'ID_GRUPO, NOME_GRUPO',
        		id: 'ID_GRUPO',
        		descricao: 'NOME_GRUPO',
        	 	where: []
        	},
        	1 : {
        		colunas: 'ID_GRUPO, NOME_GRUPO, ID_MARCA, DESCRICAO_MARCA',
        		id: 'ID_MARCA',
        		descricao: 'DESCRICAO_MARCA',
        	 	where: []
        	},
        	2 : {
        		colunas: 'ID_GRUPO, NOME_GRUPO, ID_MARCA, DESCRICAO_MARCA, COD_ITEM, DESCRICAO_ITEM',
        		id: 'COD_ITEM',
        		descricao: 'DESCRICAO_ITEM',
        	 	where: [] //{ID_MARCA:}
        	},
        	3 : {
        		colunas: 'ID_GRUPO, NOME_GRUPO, ID_MARCA, DESCRICAO_MARCA, COD_ITEM, DESCRICAO_ITEM, ID_FUNCIONARIO, NOME_FUNCIONARIO ',
        		id: 'ID_FUNCIONARIO',
        		descricao: 'NOME_FUNCIONARIO',
        	 	where: [] //{ID_MARCA},{ID_FUNCIONARIO}
        	}
        }   
    },
    constructor : function(config){
        this.initConfig(config);
    }
});