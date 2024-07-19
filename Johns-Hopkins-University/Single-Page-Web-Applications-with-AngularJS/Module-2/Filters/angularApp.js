(function() {
	'use strict';
	angular
		.module('filterApp', [])
		.controller('filterAppController', filterAppController);
	filterAppController.$inject = ['$scope', '$filter'];
	function filterAppController($scope, $filter) {
		$scope.lecture = {
				paragraphs: [
					"Greetings!",
					"This is a free willed implementation of the concepts taught at the 12th lecture on the aforementioned AngularJS course.",
					"In this App you are going to see a few (and by that I mean very few) of the possible features that can be implemented through the use of AngularJS filter components.",
					"Note: I used a few advanced features to construct these paragraphs, using the ng-repeat feature, something that is advanced for the base knowledge level for this lecture.",
					"I just did so because I was trying to give it a better look, experimenting on something that I could possibly use in a comercial app or on a really professional work in the future."
				]
			};
		$scope.caseSwitch;
		$scope.updateCaseSwitch = function(caseSwitch) {
			$scope.caseSwitch = caseSwitch;
		};
		$scope.switchCase = function() {
			var paragraphs = [];
			switch ($scope.caseSwitch) {
				case 'uppercase':
				case 'lowercase':
					$scope.lecture.paragraphs.forEach(
						function(paragraph) {
							paragraphs.push($filter($scope.caseSwitch)(paragraph)); 
						}
					);
					return paragraphs;
				default:
					return $scope.lecture.paragraphs;
			};
		};
		$scope.cost = 0;
	};		
})();
