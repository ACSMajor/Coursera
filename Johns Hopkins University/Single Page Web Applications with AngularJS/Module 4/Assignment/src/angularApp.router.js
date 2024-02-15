(function() {
	'use strict';
	angular
		.module('MenuApp')
		.config(RoutesConfig);
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: '/home'
			})
			/*
			.state('categories', {
				url: '/categories',
				templateUrl: './templates/menu.html',
				controller: 'MenuController',
				controllerAs: 'menu'
			})
			*/
			.state('categories', {
				url: '/categories',
				templateUrl: './templates/menu.html',
				controller: 'MenuController',
				controllerAs: 'menu',
				resolve: {
					categories: ['MenuService', function(MenuService) {
						var categories = MenuService.getCategories();
						return categories;
					}]
				}
			})
			.state('categories.items', {
				url: '/items/{categoryShortName}',
				templateUrl: './templates/category.html',
				controller: 'CategoryController',
				controllerAs: 'category',
				resolve: {
					categoryItems: ['$stateParams', 'MenuService', function($stateParams, MenuService) {
						var categoryItems = MenuService.getCategoryItems($stateParams.categoryShortName);
						return categoryItems;
					}]
				}
			});
	}
})();
