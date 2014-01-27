(function(){
	'use strict';

	// Create App
	angular.module('fuzzytofocused', [
		'fuzzytofocused.directives',
		'fuzzytofocused.controllers',
		'ui.bootstrap'
	]);

	// setup dependency injection
	angular.module('d3', []);
	angular.module('fuzzytofocused.controllers', []);
	angular.module('fuzzytofocused.directives', ['d3']);

})();