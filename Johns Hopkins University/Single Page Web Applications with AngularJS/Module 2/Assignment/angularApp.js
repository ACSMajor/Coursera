(function() {
	'use strict'
	angular
		.module('BuyingListCheckOffApp', [])
		.controller('BuyingListController', BuyingListController)
		.controller('BoughtListController', BoughtListController)
		.service('CheckOffService', CheckOffService);
	BuyingListController.$inject = ['CheckOffService'];
	function BuyingListController(CheckOffService) {
		var buyingList = this;
		buyingList.items = CheckOffService.getBuyingList();
		buyingList.checkOffItem = function(itemIndex) {
			CheckOffService.checkOffItem(itemIndex);
		};
		buyingList.checkBoughtQty = function() {
			return CheckOffService.getBoughtList().length > 0;
		};
	};
	BoughtListController.$inject = ['CheckOffService'];
	function BoughtListController(CheckOffService) {
		var boughtList = this;
		boughtList.items = CheckOffService.getBoughtList();
		boughtList.checkBuyingQty = function() {
			return CheckOffService.getBuyingList().length == 0;
		};
	};
	function CheckOffService() {
		var checkOffService = this;
		var buyingList = [
				{
					name: "rice",
					qty: 1,
					un: "kg"
				},
				{
					name: "beans",
					qty: 1,
					un: "kg"
				},
				{
					name: "sugar",
					qty: 2,
					un: "kg"
				},
				{
					name: "salt",
					qty: 1,
					un: "kg"
				},
				{
					name: "milk",
					qty: 3,
					un: "L"
				}
			];
		var boughtList = [];
		checkOffService.getBuyingList = function() {
			return buyingList;
		};
		checkOffService.getBoughtList = function() {
			return boughtList;
		};
		checkOffService.checkOffItem = function(itemIndex) {
			boughtList.push(buyingList[itemIndex]);
			buyingList.splice(itemIndex, 1);
		};
	};
})();
