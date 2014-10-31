angular.module('angularBase', ['ui.router'])
    .directive('appMain', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/app.tpl.html'
        }
    })
    .controller('AppController', function($scope) {});
;