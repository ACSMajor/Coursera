(function() {
	'use strict';
	angular
		.module('MenuApp')
		.controller('MenuController', MenuController);
	/*
	MenuController.$inject = ['MenuService', '$q'];
	function MenuController(MenuService, $q) {
		var menuController = this;
		var categories = MenuService.getCategories();
		if (categories instanceof $q) {
			categories
				.then(function(response) {
					menuController.categories = response.data;
				})
				.catch(function(error) {
					console.log(error);
				});
		} else
			menuController.categories = categories;
	}
	*/
	MenuController.$inject = ['categories'];
	function MenuController(categories) {
		var menuController = this;
		if (categories.data)
			categories = categories.data;
		menuController.categories = categories;
	}
})();
