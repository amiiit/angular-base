angular.module('angularBase')
    .directive('appContent', function() {
        return {
            restricts: 'E',
            templateUrl: 'app/content/app-content.tpl.html'
        }
    });