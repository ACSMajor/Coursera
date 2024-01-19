(function() {
	'use strict';
	angular
		.module('DIApp', [])
		.controller('DIAppController', DIAppController);
	function DIAppController($scope, $filter) {
		$scope.name = "Adoniran Barbosa";
		$scope.upper = function() {
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		}
	};
})();
