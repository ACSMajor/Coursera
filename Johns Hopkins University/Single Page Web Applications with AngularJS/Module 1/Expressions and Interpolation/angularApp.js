(function() {
	'use strict';
	angular
		.module('msgApp', [])
		.controller('msgAppController', msgAppController);
	msgAppController.$inject = ['$scope'];
	function msgAppController($scope) {
		$scope.message = "Welcome to the Expressions and Interpolation exercise!";
		$scope.landscape = {
			value: "",
			a: {
				title: "",
				href: ""
			},
			img: {
				alt: "",
				src: ""
			}
		};
		$scope.displayMessage = function() {
			return "This message is an offering from your trustworthy displayMessage() function call, proudly defined in the $scope service of AngularJS!";
		}
		$scope.selectFavoriteLandscape = function() {
			switch ($scope.landscape.value) {
				case "beach":
					$scope.landscape.a.title = "Alvesgaspar, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons";
					$scope.landscape.a.href = "https://commons.wikimedia.org/wiki/File:Porto_Covo_August_2014-5b.jpg";
					$scope.landscape.img.alt = "Porto Covo August 2014-5b";
					$scope.landscape.img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Porto_Covo_August_2014-5b.jpg/8192px-Porto_Covo_August_2014-5b.jpg";
				break;
				case "mountain":
					$scope.landscape.a.title = "© Vyacheslav Argenberg / http://www.vascoplanet.com/, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons";
					$scope.landscape.a.href = "https://commons.wikimedia.org/wiki/File:Himalayas,_Ama_Dablam,_Nepal.jpg";
					$scope.landscape.img.alt = "Himalayas, Ama Dablam, Nepal";
					$scope.landscape.img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Himalayas%2C_Ama_Dablam%2C_Nepal.jpg/2048px-Himalayas%2C_Ama_Dablam%2C_Nepal.jpg";
			}
		}
	};
})();
