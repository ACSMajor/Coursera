(function() {
	'use strict';
	angular
		.module('MenuApp')
		.service('MenuService', MenuService);
	MenuService.$inject = ['MenuApiFactory'];
	function MenuService(MenuApiFactory) {
		var menuService = this;
		var MenuApiService = MenuApiFactory();
		menuService.getCategories = function() {
			if (menuService.categories)
				return menuService.categories;
			else {
				var promise = MenuApiService.getCategories();
				promise
					.then(function(response) {
						menuService.categories = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});
				return promise;
			}
		}
		menuService.categoryItems = [];
		menuService.getCategoryItems = function(categoryShortName) {
			if (menuService.categoryItems && menuService.categoryItems[categoryShortName])
				return menuService.categoryItems[categoryShortName];
			else {
				var promise = MenuApiService.getCategoryItems(categoryShortName);
				promise
					.then(function(response) {
						menuService.categoryItems[categoryShortName] = response.data.menu_items;
					})
					.catch(function(error) {
						console.log(error);
					});
				return promise;
			}
		}
	}	
})();
