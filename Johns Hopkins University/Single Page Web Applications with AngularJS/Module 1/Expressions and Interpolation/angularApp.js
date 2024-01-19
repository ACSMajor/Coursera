(function() {
	'use strict';
	angular
		.module('msgApp', [])
		.controller('msgAppController', msgAppController);
	msgAppController.$inject = ['$scope'];
	function msgAppController($scope) {
		$scope.message = "Welcome to the Expressions and Interpolation exercise!";
		$scope.landscape_a_title = "";
		$scope.landscape_a_href = "";
		$scope.landscape_img_alt = "";
		$scope.landscape_img_src = "";
		$scope.displayMessage = function() {
			return "This message is an offering from your trustworthy displayMessage() function call, proudly defined in the $scope service of AngularJS!";
		}
		$scope.selectFavoriteLandscape = function(landscape) {
			if (landscape == "beach") {
				$scope.landscape_a_title = "Alvesgaspar, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons";
				$scope.landscape_a_href = "https://commons.wikimedia.org/wiki/File:Porto_Covo_August_2014-5b.jpg";
				$scope.landscape_img_alt = "Porto Covo August 2014-5b";
				$scope.landscape_img_src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Porto_Covo_August_2014-5b.jpg/8192px-Porto_Covo_August_2014-5b.jpg";
			} else {
				$scope.landscape_a_title = "© Vyacheslav Argenberg / http://www.vascoplanet.com/, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons";
				$scope.landscape_a_href = "https://commons.wikimedia.org/wiki/File:Himalayas,_Ama_Dablam,_Nepal.jpg";
				$scope.landscape_img_alt = "Himalayas, Ama Dablam, Nepal";
				$scope.landscape_img_src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Himalayas%2C_Ama_Dablam%2C_Nepal.jpg/2048px-Himalayas%2C_Ama_Dablam%2C_Nepal.jpg";
			}
		}
	};
})();
