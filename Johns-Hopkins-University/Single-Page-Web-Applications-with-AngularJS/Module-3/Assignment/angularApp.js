(function() {
	'use strict';
	angular
		.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', NarrowItDownController)
		.service('NarrowItDownService', NarrowItDownService)
		.factory('MenuApiFactory', MenuApiFactory)
		.directive('foundItems', FoundItemsDirective)
		.constant('MenuApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
		.filter('firstCapitalLetter', FirstCapitalLetterFilter);
	function FirstCapitalLetterFilter() {
		return function(input, label) {
			if (input)
				input = input.charAt(0).toUpperCase() + input.slice(1);
			else
				input = label;
			return input;
		};
	};
	function FoundItemsDirective() {
		var ddo = {
			templateUrl: './foundItems.html',
			scope: {
				items: '<',
				onRemoveCategory: '&',
				onRemoveItem: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'menuItems',
			bindToController: true
		};
		return ddo;
	};
	function FoundItemsDirectiveController() {
		var menuItems = this;
		menuItems.isEmpty = function() {
			return menuItems.items && Object.keys(menuItems.items).length === 0;
		};
		menuItems.hasItems = function() {
			return menuItems.items && Object.keys(menuItems.items).length !== 0;
		};
	};
	NarrowItDownController.$inject = ['NarrowItDownService'];
	function NarrowItDownController(NarrowItDownService) {
		var narrowItDown = this;
		narrowItDown.menuSearch = function() {
			if (narrowItDown.searchItem && narrowItDown.searchItem !== "") {
				narrowItDown.menuItems = NarrowItDownService.getMenuItems(narrowItDown.searchItem);
			} else
				narrowItDown.menuItems = {};
		};
		narrowItDown.removeMenuCategory = function(categoryIndex) {
			delete narrowItDown.menuItems[categoryIndex];
		};
		narrowItDown.removeMenuItem = function(categoryIndex, itemIndex) {
			narrowItDown.menuItems[categoryIndex].menu_items.splice(itemIndex, 1);
			if (narrowItDown.menuItems[categoryIndex].menu_items.length === 0)
				delete narrowItDown.menuItems[categoryIndex];
		};
	};
	NarrowItDownService.$inject = ['MenuApiFactory'];
	function NarrowItDownService(MenuApiFactory) {
		var narrowItDownService = this;
		var MenuApiService = MenuApiFactory();
		var promise = MenuApiService.getMenuItems();
		promise
			.then(function(response) {
				narrowItDownService.menuItems = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
		narrowItDownService.getMenuItems = function(searchItem) {
			var menuItems = JSON.parse(JSON.stringify(narrowItDownService.menuItems));
			for (var ci in menuItems) {
				for (var ii = menuItems[ci].menu_items.length - 1; ii >= 0; ii--) {
					if (menuItems[ci].menu_items[ii].name.toLowerCase().indexOf(searchItem.toLowerCase()) === -1 &&
						menuItems[ci].menu_items[ii].description.toLowerCase().indexOf(searchItem.toLowerCase()) === -1)
						menuItems[ci].menu_items.splice(ii, 1);
				};
				if (menuItems[ci].menu_items.length === 0)
					delete menuItems[ci];
			};
			return menuItems;
		};
	};
	MenuApiFactory.$inject = ['$http', 'MenuApiBasePath'];
	function MenuApiFactory($http, MenuApiBasePath) {
		var menuApiFactory = function() {
			return new MenuApiService($http, MenuApiBasePath);
		};
		return menuApiFactory;
	};
	MenuApiService.$inject = ['$http', 'MenuApiBasePath'];
	function MenuApiService($http, MenuApiBasePath) {
		var menuApiService = this;
		menuApiService.getMenuItems = function() {
			var response = $http({
				method: "GET",
				url: (MenuApiBasePath + "/menu_items.json")
			});
			return response;
		};
	};
})();
