(function () {

    'use strict';

    //Pegando o módulo app (ele precisa já ter sido setado, se não da ruim)
    angular.module('app').controller('clienteCadastrarController', clienteController);

    clienteController.$inject = ['$scope', 'clienteService', '$state'];

    function clienteController($scope, clienteService, $state) {

        //Estou jogando a variavel de escopo dentro da variavel vm
        //Você não pode fazer isso dentro de uma function interna
        var vm = this;

        vm.cliente = {};

        this.salvar = function () {
            clienteService.cadastrar(vm.cliente).then(sucesso, erro);
        }

        function sucesso() {
            vm.cliente = {};
            $state.go('main.listar');
        }

        function erro() {
            alert("Falha ao cadastrar");
        }
    }
})();