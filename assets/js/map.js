function initMap () {
	let options = {
		center: {lat: 55.769281, lng: 37.620696},	//55.769281, 37.620696
		zoom: 14
	};

	let map = new google.maps.Map(document.getElementById('map'), options);

	let marker = new google.maps.Marker({
		position: {lat: 55.769281, lng: 37.620696},
		map: map
	})
}