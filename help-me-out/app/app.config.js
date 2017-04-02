angular.module('helpMeOutApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/about', {
            template: '<about></about>'
        }).when('/request-a-service', {
            template: '<request-a-service></request-a-service>'
        }).when('/distribute-services', {
            template: '<distribute-services></distribute-services>'
        }).when('/view-assignments', {
            template: '<view-assignments></view-assignments>'
        }).when('/login', {
            template: '<login></login>'
        }).otherwise('/login');


        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

]);