angular.module('angularBase', ['ui.router', 'ng-polymer-elements'])
    .directive('appMain', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/app.tpl.html'
        }
    })
    .controller('AppController', function($scope) {});
;

window.addEventListener('polymer-ready', function() {
    var ngApp = document.getElementById('ng-app').getAttribute('to-be-ng-app');
    if (!ngApp) {
        console.warn('no ng-app');
    }
    console.log('readt');
    angular.bootstrap(wrap(document), [ngApp]);
});