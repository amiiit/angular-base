angular.module('angularBase', ['ui.router'])
    .directive('appMain', function() {
        return {
            //  templateUrl: 'app/app.html.tpl'
            restrict: 'E',
            templateUrl: 'app/app.tpl.html'
        }
    })
    .controller('AppController', function($scope) {});
;