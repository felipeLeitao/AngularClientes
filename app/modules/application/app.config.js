(function () {

    'use strict';

    //Pegando o módulo app (ele precisa já ter sido setado, se não da ruim)
    angular.module('app').config(minhaConfig);

    //Jeito Hackerzão de se injetar dependencias
    minhaConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function minhaConfig($stateProvider, $urlRouterProvider)
    {
        //Aqui nesse comando definimos a rota padrão pra nossa aplicação
        $urlRouterProvider.otherwise('/listar');

        $stateProvider.state('main',
            {
                abstract: true,
                templateUrl: 'modules/clientes/views/layout.html'
            }).state('main.listar',
            {
                templateUrl: 'modules/clientes/views/listar.html',
                url: '/listar'
            }).state('main.cadastrar', {
                templateUrl: 'modules/clientes/views/cadastrar.html',
                url: '/cadastrar'
            });
    }
})();