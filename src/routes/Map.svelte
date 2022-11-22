<script>
	//https://youtu.be/1ziIf4wOGzE?t=293 new google maps came out Oct 6 2022...
	//https://storage.googleapis.com/gweb-cloudblog-publish/original_images/deck-12-html-elements.gif
	import { onMount } from 'svelte';
	export let data;
	export let renew;
	export let showAll;
	let qmpsCorrected = data.qmpsCorrected;
	let qmpsActive = data.qmpsActive;
	let qmpsRenew = data.qmpsRenew;
	let selected = 'newPatient';
	function initMap(list) {
		const map = new google.maps.Map(document.getElementById('map'), {
			zoom: 11,
			center: { lat: 40.6669, lng: -111.888 },
			mapId: '4757475467178341', //https://mapstyle.withgoogle.com/
			// gestureHandling: "greedy", //<<<< Neat option
			mapTypeControl: false,
			streetViewControl: false,
			fullscreenControl: false,
			backgroundColor: '#212121'
		});
		let i = 0;
		for (let item of list) {
			const priceTag = document.createElement('div');
			priceTag.className = 'price-tag';
			let lat = item.lat;
			let lng = item.lng;
			const marker = new google.maps.Marker({
				map,
				position: { lat, lng },
				content: priceTag,
				label: item[selected] ? `$${item[selected]}` : ``,
				icon: item[selected]
					? {
							url: '/bubble.png',
							scaledSize: new google.maps.Size(40, 35),
							labelOrigin: new google.maps.Point(20, 15)
					  }
					: {
							url: '/redX.png',
							scaledSize: new google.maps.Size(15, 15),
							labelOrigin: new google.maps.Point(30, 15)
					  }
			});
			let infoWindow = new google.maps.InfoWindow({
				content: `
        <h1 style="color:black;">Practice: ${item.practice}</h1>
        <p style="color:black; font-size:17px;">${
					Number.parseFloat(item[selected])
						? `Price: $` + item[selected]
						: `This QMP does not list their price online.`
				}</p>
        <a href="${item.urlEncoded}">More Info: </a> <img src=/external2.svg width="12" height="12">
        `
			});
			map.addListener('click', function () {
				if (infoWindow) infoWindow.close();
			});
			var activeInfoWindow;
			marker.addListener('click', function () {
				if (activeInfoWindow) {
					activeInfoWindow.close();
				}
				infoWindow.open(map, marker);
				activeInfoWindow = infoWindow;
			});
			i++;
		}
	}

	onMount(async () => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		initMap(qmpsActive);
	});
	function updateMap() {
		initMap(qmpsCorrected);
	}
	function updateMap2() {
		initMap(qmpsActive);
	}
	$: if (renew === true) {
		console.log('true');
		selected = `renewActive6`;
		initMap(qmpsRenew);
	}
	$: if (renew === false) {
		selected = `newPatient`;
		initMap(qmpsActive);
	}

	$: if (showAll === true) {
		initMap(qmpsCorrected);
	}
	$: if (showAll === false) {
		initMap(qmpsActive);
	}
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-xQRwvNDSuujhcAwsXoxIJMoyfqhoq_4&v=beta&libraries=marker"
	>
	</script>
</svelte:head>
<br />

<div>
	<div id="map" />
</div>

<style>
	#map {
		height: 500px;
		border-radius: 15px;
		margin: auto;
		width: clamp(700px, 90%, 1200px);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	@media (orientation: portrait) {
		#map {
			height: 500px;
			width: 90%;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		}
	}
</style>
