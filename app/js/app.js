// File: app/js/main.js
(function() {
	'use strict';
	//console.log('hola mundo!, Daniel');
	angular.module('inicioSesion', ['ngRoute'])
		.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'includes/views/site/login.tpl.html'
			});
			$locationProvider.html5Mode(true);
		}]);
})();