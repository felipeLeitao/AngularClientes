(function () {
    //padrão IIFE

    'use strict';
    //Não deixa criar variavel sem o var a esquerda

    //Getters and Setters

    //Aqui criamos o nosso módulo principal e dizemos que ele vai precisar
    //do módulo "ui.router"
    angular.module('app',
        [
            'ui.router'
        ]);
})();