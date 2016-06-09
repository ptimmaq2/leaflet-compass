Package.describe({
	summary: "Leaflet Control Compass",
	name: "stefcud:leaflet-compass",
	version: "0.0.1",
	git: "https://github.com/stefanocudini/leaflet-compass.git"
});

Package.on_use(function (api, where) {
	api.add_files('dist/leaflet-compass.src.js', 'client');
	api.add_files('dist/leaflet-compass.src.css', 'client');
	api.add_files('images/compass-icon.png', 'client');
});
