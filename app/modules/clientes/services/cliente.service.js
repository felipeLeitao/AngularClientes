(function () {

    'use strict';

    //Pegando o módulo app (ele precisa já ter sido setado, se não da ruim)
    angular.module('app').service('clienteService', clienteService);

    clienteService.$inject = ['$http'];

    function clienteService($http) {

        var url = "http://sisclientes.azurewebsites.net/api/cliente";

        this.listar = function () {

            return $http(
                {
                    url: url,
                    method: "GET"
                });
        }

        this.cadastrar = function (cliente) {

            return $http(
                {
                    url: url,
                    method: "POST",
                    data: cliente
                });
        }
    }
})();