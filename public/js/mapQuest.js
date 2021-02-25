function initMap() {
	L.mapquest.key = 'KDOYzdVe0PdqmMCjYT0f4HGWtGm6dtHn8EY';

	// 'map' refers to a <div> element with the ID map	
	var map = L.mapquest.map('map', {
		center: [32.87874, -117.23592],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.87874, -117.23592]).addTo(map);
}

