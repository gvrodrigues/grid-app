var app = angular.module('gridApp', ['ui.router', 'userApi'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',  function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/grid.html',
			controller: 'GridController'
		})

	$urlRouterProvider.otherwise('/');

}]);