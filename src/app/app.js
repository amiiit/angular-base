angular.module('angularBase', ['ui.router'])
    .directive('appMain', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/app.tpl.html',
            controller: function ($rootScope) {
                $rootScope.state = {title: 'all'};
            }
        }
    });
