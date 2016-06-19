(function () {

    'use strict';

    //Pegando o módulo app (ele precisa já ter sido setado, se não da ruim)
    angular.module('app').controller('clienteListarController', clienteController);

    clienteController.$inject = ['$scope', 'clienteService'];

    function clienteController($scope, clienteService) {

        //Estou jogando a variavel de escopo dentro da variavel vm
        //Você não pode fazer isso dentro de uma function interna
        var vm = this;

        vm.ola = "Olá mundo";

        vm.listaClientes = [];

        clienteService.listar().then(sucesso, erro);

        function sucesso(retorno) {
            vm.listaClientes = retorno.data;
        }

        function erro() {
            alert("deu ruim");
        }
    }

})();