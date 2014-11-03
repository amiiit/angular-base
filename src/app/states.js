angular.module('angularBase')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/all');

        $stateProvider
            .state('all', {
                url: '/all',
                views: {
                    'toolbar': {
                        controller: 'AppController',
                        templateUrl: 'app/header/header-title-all.tpl.html'
                    },
                    'main': {
                        controller: 'AppController',
                        templateUrl: 'app/content/app-content-all.tpl.html'
                    }
                }
            })
            .state('recent', {
                url: '/recent',
                views: {
                    'toolbar': {
                        controller: 'AppController',
                        templateUrl: 'app/header/header-title-recent.tpl.html'
                    },
                    'main': {
                        controller: 'AppController',
                        templateUrl: 'app/content/app-content-recent.tpl.html'
                    }
                }
            })
            .state('archived', {
                url: '/archived',
                views: {
                    'toolbar': {
                        controller: 'AppController',
                        templateUrl: 'app/header/header-title-archived.tpl.html'
                    },
                    'main': {
                        controller: 'AppController',
                        templateUrl: 'app/content/app-content-archived.tpl.html'
                    }
                }
            })
    });
