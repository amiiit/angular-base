angular.module('angularBase')
    .directive('headerTabs', function() {
        return {
            restricts: 'E',
            templateUrl: 'app/header/header-tabs.tpl.html'
        }
    });
