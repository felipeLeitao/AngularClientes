(function () {

    'use strict';

    //Pegando o módulo app (ele precisa já ter sido setado, se não da ruim)
    angular.module('app').controller('clienteListarController', clienteController);

    clienteController.$inject = ['$scope'];

    function clienteController($scope) {

        //Estou jogando a variavel de escopo dentro da variavel vm
        //Você não pode fazer isso dentro de uma function interna
        var vm = this;

        vm.ola = "Olá mundo";
    }
})();