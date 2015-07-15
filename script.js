angular.module('RoutingApp', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider
			.when('/about', {
			    templateUrl: 'about.html'
			})
			.when('/contact', {
			    templateUrl: 'contact.html'
			})
			.otherwise({
			    templateUrl: 'home.html'
			});
	}]);