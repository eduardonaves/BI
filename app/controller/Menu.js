Ext.define('BI.controller.Menu',{
	extend: 'Ext.app.Controller',

	views:['menu.menuTree', 'menu.menuConfig', 'componentes.ConfigDragAndDrop', 'componentes.RelatorioAbas'],

	refs:[{
		ref: 'menutree',
		selector: 'menutree'
	},{
		ref: 'menuconfig',
		selector: 'menuconfig'
	},{
		ref: 'configdrapanddrop',
		selector: 'configdrapanddrop'
	},{
		ref: 'relatorioabas',
		selector: 'relatorioabas'
	}],

	init: function(){
        var me = this;

		me.control({
			'configdrapanddrop button[action=geraRelatorio]': {
				click: function(btn, event, eOpts){

					//setandos as configurações dos niveis
					var grid = btn.up('grid');
					var storeGrid = grid.getSelectionModel().getStore();

					var niveis = [];
					var config = [];
					var abatitle = '';

					var cols = '';

					storeGrid.each(function(item, index, total){

						if(cols == ''){
							cols = item.get('id') + ', ' + item.get('descricao')
						}else{
							cols = cols + ', ' + item.get('id') + ', ' + item.get('descricao');
						}

						niveis[index] = {
							colunas: cols,
			        		id: item.get('id'),
			        		descricao: item.get('descricao'),
			        		where: []
						};

							abatitle = abatitle + item.get('descricao');
						});

					if(niveis. length == 0 ){
						Ext.Msg.show({
						     title:'Alerta',
						     msg: 'Escolha pelos menos 1 configuração',
						     buttons: Ext.Msg.OK,
						     icon: Ext.Msg.WARNING
						});
					}else{

						BI.config.Niveis.setNiveis(niveis);
						BI.config.Niveis.setIdNivelAtual(0);
						//--
						//criando as abas com os relatorios
						
						var tabPanel = me.getRelatorioabas();

						if(tabPanel.getComponent(abatitle)){
                            var abaJaCriada = tabPanel.getComponent(abatitle);

                            tabPanel.setActiveTab(abaJaCriada);

                        }else{
				                var tab = tabPanel.add({
			                    title: 'Relatório ' + (tabPanel.items.length + 1),
			                    xtype: 'treegrid',
			                    id: abatitle,
			                    closable: true
			                });
			                tabPanel.setActiveTab(tab);
		           		}
                	}
                    //--
				}						
			},
			'layoutdrapanddrop button[action=geraRelatorio]': {
				click: function(btn, event, eOpts){

					var grid = btn.up('grid');
					var storeGrid = grid.getSelectionModel().getStore();

					var colunas = [];
					var config = [];

					var cols = '';

					storeGrid.each(function(item, index, total){
						console.log(item);

						colunas[index] = {
							xtype: item.get('tipo') ? item.get('tipo') : '',
		                    text: item.get('name'),
		                    flex: 1,
		                    sortable: true,
		                    dataIndex: item.get('id')
						}
					});

					if(colunas.length == 0 ){
						Ext.Msg.show({
						     title:'Alerta',
						     msg: 'Caso não escolha nenhum layout. Vão aparecer todos(default).',
						     buttons: Ext.Msg.OK,
						     icon: Ext.Msg.WARNING
						});
					}else{

						BI.config.Colunas.setColunas(colunas);
					}
				}

			},
			'button[action=salvarConfig]':{
				click: function (btn, event, eOpts){
					
					Ext.Msg.show({
					     title:'Erro',
					     msg: 'Não foi possível salvar',
					     buttons: Ext.Msg.OK,
					     icon: Ext.Msg.ERROR
					});
				}
			}	
		});
	}

});