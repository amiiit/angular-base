angular.module('angularBase', ['ui.router', 'ng-polymer-elements'])
    .directive('appMain', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/app.tpl.html'
        }
    })
    .controller('AppController', function($scope) {});
;