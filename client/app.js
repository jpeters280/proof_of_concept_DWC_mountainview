var app = angular.module('app', ['ngRoute','base64', 'naif.base64']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
    
    .when('/', {
        templateUrl: '/partials/index.html',
        controller: 'indexController'
    })
    .when('/friends/:id/edit', {
        templateUrl: '/partials/edit.html',
        controller: 'editController',
    })
    .when('/friends/new', {
        templateUrl: '/partials/new.html',
        controller: 'newController',
    })
    .when('/friends/:id', {
        templateUrl: '/partials/show.html',
        controller: 'showController',
    })
    .when('/frontpageedit', {
        templateUrl: '/partials/frontpageedit.html',
        controller: 'showController',
    })
    .otherwise({
        redirectTo: '/'
    });
});