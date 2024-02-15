(function() {
	'use strict';
	angular
		.module('MenuApp')
		.component('menuCategories', {
			templateUrl: './templates/menuCategories.html',
			controller: MenuCategoriesController,
			bindings: {
				items: '<'
			}
		});
	MenuCategoriesController.$inject = ['$stateParams']
	function MenuCategoriesController($stateParams) {
		var menuCategoriesController = this;
		menuCategoriesController.selectedCategory = $stateParams.categoryShortName;
		menuCategoriesController.setSelectedCategory = function(category) {
			menuCategoriesController.selectedCategory = category;
		}
	}
})();
