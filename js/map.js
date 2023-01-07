// **Hit to check**: 
// alert('leaflet!')
// console.log('gis leaflet console!')

var map = L.map('map').setView([25.5689,91.8831 ], 6);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Esri'
}).addTo(map);

var marker = L.marker([25.5689,91.8831]).addTo(map)
		.bindPopup('NE-SAC_Anirban')
		.openPopup();	