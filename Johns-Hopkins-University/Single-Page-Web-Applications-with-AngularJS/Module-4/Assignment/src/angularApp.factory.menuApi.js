(function() {
	'use strict';
	angular
		.module('MenuApp')
		.factory('MenuApiFactory', MenuApiFactory)
		.constant('MenuApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");
	MenuApiFactory.$inject = ['$http', 'MenuApiBasePath'];
	function MenuApiFactory($http, MenuApiBasePath) {
		var menuApiFactory = function() {
			return new MenuApiService($http, MenuApiBasePath);
		}
		return menuApiFactory;
	}
	MenuApiService.$inject = ['$http', 'MenuApiBasePath'];
	function MenuApiService($http, MenuApiBasePath) {
		var menuApiService = this;
		menuApiService.getCategories = function() {
			var response = $http({
				method: "GET",
				url: (MenuApiBasePath + "/categories.json")
			});
			return response;
		}
		menuApiService.getCategoryItems = function(categoryShortName) {
			var response = $http({
				method: "GET",
				url: (MenuApiBasePath + "/menu_items/" + categoryShortName + ".json")
			})
			return response;
		}
	}
})();
