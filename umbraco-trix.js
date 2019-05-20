app.requires.push('angularTrix');
angular.module("umbraco").controller("Umbraco.Core.TrixController",
function ($scope, assetsService) {
   
	assetsService
		.load([
			"~/App_Plugins/Trix/trix.js"
        ]).then(function () {
            Trix.config.blockAttributes.default.tagName = 'p';
    });

	// load the separate css for the editor to avoid it blocking our JavaScript loading
	assetsService.loadCss("~/App_Plugins/Trix/trix.css");
});