angular.module('angularBase')
    .directive('appHeader', function () {
        return {
            restricted: 'E',
            templateUrl: 'app/header/app-header.tpl.html',
            controller: function ($scope, $rootScope) {
                $scope.setState = function (stateTitle) {
                    $rootScope.state.title = stateTitle;
                }
            }
        }
    });