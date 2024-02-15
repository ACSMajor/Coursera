(function() {
	'use strict';
	angular
		.module('MenuApp')
		.filter('firstCapitalLetter', FirstCapitalLetterFactory);
	function FirstCapitalLetterFactory() {
		return function(input, altLabel) {
			if (!input) {
				if (altLabel)
					input = altLabel;
				else
					return "";
			}
			return input.charAt(0).toUpperCase() + input.slice(1);
		}
	}
})();
