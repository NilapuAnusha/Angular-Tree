'use strict';

/* defining the app */
var app = angular
	.module("demoApp", ['ngRoute', 'ngResource', 'ui.tree'])
	.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    	when('/', {
    		templateUrl: 'partial/home.html'
      })
			.when('/static', {
				templateUrl: 'partial/static_tree.html', 
				controller: 'mainCtrl'
			})
			.when('/dynamic', {
				templateUrl: 'partial/tree.html', 
				controller: 'mainCtrl'
			})
			.otherwise({redirectTo: '/'});
	}]);
