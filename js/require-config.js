// JSHint override for a wp_localize_script placeholder:
/* global REQUIRE_CONFIGURATION:true, requirejs:false */

// Configure require before initiating the system
require.config({
	// Note that this config file only applies to the WP-loaded script: we use
	// separate configuration within the Grunt task for building the release version
	baseUrl: REQUIRE_CONFIGURATION.baseUrl,

	// The shim is not an essential part of the configuration if all of your
	// modules are formatted for AMD; however, many jQuery plugins and other
	// libraries will not work out of the box. Shimming those modules lets you
	// specify custom handling for how Require should locate the JS object
	// defining the module's functionality.
	shim: {
		// Identify any non-AMD modules in your system...
		'lib/module-maker': {
			// optionally specify AMD dependencies...
			// deps: [ 'jquery' ],

			// and then tell Require the identifier to grab off the global scope
			// in place of the module.
			exports: 'ModuleMaker'
		}
	}
});

// Calling `require()` takes the place of declaring a `data-main` attribute
// on the require.js script tag; this gives us more control
// Just 'app' loads 'src/app', thanks to the baseURL passed in from WP
require(['app']);
