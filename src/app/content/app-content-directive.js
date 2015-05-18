angular.module('angularBase')
    .directive('appContent', function ($rootScope) {
        return {
            restricts: 'E',
            templateUrl: 'app/content/app-content.tpl.html',
            link: function (scope) {
                scope.$watch(function () {
                    return $rootScope.state
                }, function (newState) {
                    console.log('newstate', newState);
                    scope.appSection = newState.title;
                }, true)
            }
        }
    });