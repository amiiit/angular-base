angular.module('angularBase')
    .directive('headerTabs', function($state) {
        return {
            link: function(scope, element) {
                scope.tabs = [
                    {
                        title: 'All',
                        state: 'all'
                    },
                    {
                        title: 'Recent',
                        state: 'recent'
                    },
                    {
                        title: 'Archived',
                        state: 'archived'
                    }
                ];
                scope.selectedTabIndex = 0;
                scope.$watch('selectedTabIndex', function(selectedIndex) {
                    $state.go(scope.tabs[selectedIndex].state);
                });
            },
            restricts: 'E',
            templateUrl: 'app/header/header-tabs.tpl.html'
        }
    });
