// File: app/js/main.js
//(function() {
	'use strict';

	var app = angular.module('inicioSesion', ['ngRoute']);

	app
		.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'includes/views/site/login.html'
			});
			$locationProvider.html5Mode(true);
		}]);
//})();