angular.module('angularBase')
    .directive('appHeader', function() {
        return {
            restricted: 'E',
            templateUrl: 'app/header/app-header.tpl.html'
        }
    })