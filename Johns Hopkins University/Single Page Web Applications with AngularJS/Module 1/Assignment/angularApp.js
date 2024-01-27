(function() {
	'use strict';
	angular
		.module('LunchCheckApp', [])
		.controller('LunchCheckAppController', LunchCheckAppController);
	LunchCheckAppController.$inject = ['$scope'];
	function LunchCheckAppController($scope) {
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
				$scope.lunch.color = "orangered";
				$scope.lunch.borderColor = "orangered";
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
