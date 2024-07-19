(function() {
	'use strict';
	angular
		.module('myFirstAngularApp', [])
		.controller('myFirstAngularAppController', function($scope) {
			$scope.firstName = "Adoniran";
			$scope.lastName = "Barbosa";
			$scope.sayHello = function() {
				return "Hello Coursera!";
			};
		});
})();
