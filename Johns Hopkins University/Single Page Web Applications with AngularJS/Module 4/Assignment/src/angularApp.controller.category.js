(function() {
	'use strict';
	angular
		.module('MenuApp')
		.controller('CategoryController', CategoryController);
	CategoryController.$inject = ['$stateParams', 'categoryItems'];
	function CategoryController($stateParams, categoryItems) {
		var categoryController = this;
		categoryController.categoryItems = [];
		if (categoryItems.data && categoryItems.data.menu_items) {
			categoryItems = categoryItems.data.menu_items;
			for (var i = 0; i < categoryItems.length; i++) {
				if (!(categoryItems[i].description instanceof Array)) {
					var description = categoryItems[i].description.split(";");
					for (var j = 0; j < description.length; j++) {
						description[j] = description[j].trim();
					}
					categoryItems[i].description = description;
				}
			}
		}
		categoryController.categoryShortName = $stateParams.categoryShortName;
		categoryController.categoryItems[categoryController.categoryShortName] = categoryItems;
	}
})();
