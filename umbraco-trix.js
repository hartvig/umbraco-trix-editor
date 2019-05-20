app.requires.push('angularTrix');
angular.module("umbraco").controller("Umbraco.Core.TrixController",
function ($scope, assetsService, dialogService) {

	assetsService
		.load([
			"~/App_Plugins/Trix/trix.js"
		]).then(function() {
		});

	// load the separate css for the editor to avoid it blocking our JavaScript loading
	assetsService.loadCss("~/App_Plugins/Trix/trix.css");
});