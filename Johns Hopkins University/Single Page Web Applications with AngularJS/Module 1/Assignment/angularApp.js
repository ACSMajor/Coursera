(function() {
	'use strict';
	angular
		.module('lunchCheckApp', [])
		.controller('lunchCheckAppController', lunchCheckAppController);
	lunchCheckAppController.$inject = ['$scope'];
	function lunchCheckAppController($scope) {
		$scope.lunch = {
			items: "",
			msg: "",
			color: "wheat",
			borderColor: "saddlebrown"
		};
		$scope.lunchCheck = function() {
			var itemsQty = 0,
				itemsArray = $scope.lunch.items.split(",");
			itemsArray.forEach(function(item) {
				item = item.trim();
				if (item.length > 0)
					itemsQty++;
			});
			if (itemsQty == 0) {
				$scope.lunch.msg = "Please Enter Data First!";
				$scope.lunch.color = "indianred";
				$scope.lunch.borderColor = "indianred";
			} else {
				if (itemsQty > 3)
					$scope.lunch.msg = "Too Much!";
				else
					$scope.lunch.msg = "Enjoy!";
				$scope.lunch.color = "limegreen";
				$scope.lunch.borderColor = "limegreen";
			}
		};
	};
})();
