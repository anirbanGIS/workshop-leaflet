// **Hit to check**: 
// alert('lealfet!')
// console.log('gis lflt console!')

var map = L.map('map').setView([25.5689,91.8831], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([25.5689,91.8831]).addTo(map)
		.bindPopup('A test point')
		.openPopup();	