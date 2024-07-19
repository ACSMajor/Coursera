(function() {
	'use strict';
	angular
		.module('nameCalculator', [])
		.controller('nameCalculatorController', function($scope) {
			$scope.name = "";
			$scope.totalNumericValue = 0;
			$scope.displayTotalNumericValue = function() {
				var totalNumericValue = calculateTotalNumericValue($scope.name);
				$scope.totalNumericValue = totalNumericValue;
			}
			function calculateTotalNumericValue(s) {
				var nameTotalNumericValue = 0;
				for (var i = 0; i < s.length; i++) {
					nameTotalNumericValue += s.charCodeAt(i);
				}
				return nameTotalNumericValue;
			};
		});
})();
