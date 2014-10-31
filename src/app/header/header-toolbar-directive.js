angular.module('angularBase')
    .directive('headerToolbar', function() {
        return {
            restricts: 'E',
            templateUrl: 'app/header/header-toolbar.tpl.html'
        }
    })