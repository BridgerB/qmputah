<script>
	export let data;
	import { onMount } from 'svelte';
	////////////////////////////////////////////////////////////////////////////
	//firebase:
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	const firebaseConfig = {
		apiKey: 'AIzaSyA-xQRwvNDSuujhcAwsXoxIJMoyfqhoq_4',
		authDomain: 'qmputah-2022-10-06.firebaseapp.com',
		databaseURL: 'https://qmputah-2022-10-06-default-rtdb.firebaseio.com',
		projectId: 'qmputah-2022-10-06',
		storageBucket: 'qmputah-2022-10-06.appspot.com',
		messagingSenderId: '677877744052',
		appId: '1:677877744052:web:8ad4b1d83774b5425072e1',
		measurementId: 'G-E36TVKC3N0'
	};
	onMount(() => {
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);
	});
	////////////////////////////////////////////////////////////////////////////
	let qmp = data.qmp;
	let providers = qmp.providers;
	let lat = qmp.lat;
	let lng = qmp.lng;
	let newPatient = qmp.newPatient;
	let practice = qmp.practice;
	let url = qmp.url;
	let priceHistory = data.priceHistory;
	let priceHistoryRows = [['foo....', 'First Card', 'Renew Card']];
	for (const property in priceHistory) {
		priceHistoryRows.push([
			property,
			priceHistory[property].newPatient,
			priceHistory[property].renewActive6
		]);
	}
	function drawChart() {
		var data = google.visualization.arrayToDataTable(priceHistoryRows);
		var options = {
			title: 'Medical Card Price History',
			hAxis: { title: 'Date' },
			vAxis: { title: 'Price', viewWindow: { min: 0, max: 500 } },
			pointSize: 5
		};
		var chart = new google.visualization.AreaChart(document.getElementById('myChart'));
		chart.draw(data, options);
	}
	function initMap() {
		const map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: { lat: lat, lng: lng },
			mapId: '4757475467178341',
			gestureHandling: 'greedy', //<<<< Neat option
			backgroundColor: '#212121'
			// mapTypeControl: false // disables map/satellite toggle
		});
		const marker = new google.maps.Marker({
			position: { lat, lng },
			map: map,
			label: newPatient ? `$${newPatient}` : ``,
			icon: newPatient
				? {
						url: '/bubble.png',
						scaledSize: new google.maps.Size(60, 35),
						labelOrigin: new google.maps.Point(30, 15)
				  }
				: {
						url: '/redX.png',
						scaledSize: new google.maps.Size(35, 35),
						labelOrigin: new google.maps.Point(30, 15)
				  }
		});
		let infoWindow = new google.maps.InfoWindow({
			content: `
      <h1 style="color:black;">Practice: ${practice}</h1>
      <p style="color:black;">${
				Number.parseFloat(newPatient)
					? `Price: $` + newPatient
					: `This QMP does not list their price online.`
			}</p>
      <p style="color:black;">Website: <a target="_blank" href="${url}">${url}</a> <img src=/external2.svg width="12" height="12"></p>
      `
		});
		marker.addListener('click', function () {
			infoWindow.open(map, marker);
		});
	}
	let time = new Date();
	$: seconds = time.getSeconds();
	onMount(async () => {
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);
		await new Promise((resolve) => setTimeout(resolve, 500));
		initMap();
		google.charts.load('current', { packages: ['corechart'] });
		google.charts.setOnLoadCallback(drawChart);
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
	let qmpNames = '';
	for (const provider of providers) {
		qmpNames += provider + `, `;
	}
</script>

<svelte:head>
	<script
		await
		defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-xQRwvNDSuujhcAwsXoxIJMoyfqhoq_4&callback=initMap&v=weekly"></script>
	<script await defer src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<body>
	<br /><br /><br />
	<h1><a target="_blank" style="color: black" href={qmp.url}>{qmp.practice}</a></h1>
	<div class="grid-container">
		<div class="map" id="map" />
		<div class="info">
			<h3>Contact Information</h3>
			<p>{qmp.formatted_address ? `Address: ` + qmp.formatted_address : ``}</p>
			<p>{qmp.email ? `Email: ` + qmp.email : ``}</p>
			<p>{qmp.phoneNumber ? `Phone Number: ` + qmp.phoneNumber : ``}</p>
			<p>{qmp.textNumber ? `Text Number: ` + qmp.textNumber : ``}</p>
			<p>{qmp.faxNumber ? `Fax Number: ` + qmp.faxNumber : ``}</p>
			<p>
				{@html qmp.url
					? `<a target="_blank" style="color: black" href="${qmp.url}">Website</a>`
					: ``}
			</p>
			<p>Providers: {qmpNames.substring(0, qmpNames.length - 2)}</p>
			<br />
			{#if qmp.renewActive6}
				<h3>Pricing Information</h3>
				<p>{qmp.newPatient ? `New Medical Card Price: $` + qmp.newPatient : ``}</p>
				<p>{qmp.renewActive6 ? `Renewal Price (6 months): $` + qmp.renewActive6 : ``}</p>
				<p>{qmp.renewActive12 ? `Renewal Price (12 months): $` + qmp.renewActive12 : ``}</p>
				<p>
					{@html Math.floor((time - qmp.timestamp) / 1000 / 60 / 60 / 24) < 1
						? `Pricing information as of today at ${new Date(qmp.timestamp).toLocaleTimeString(
								'en-US',
								{ timeStyle: 'short' }
						  )}`
						: Math.floor((time - qmp.timestamp) / 1000 / 60 / 60 / 24) == 1
						? `Pricing as of 1 day ago`
						: `Pricing as of ${Math.floor(
								(time - qmp.timestamp) / 1000 / 60 / 60 / 24
						  )} days ago. Since this is more than 1 day ago we may be having problems with this qmp website. See our <a href="/Todo" style="color: black">Todo</a> page.`}
				</p>
				<p>
					{@html qmp.urlPrice
						? `<a target="_blank" style="color: black" href="${qmp.urlPrice}">Pricing Information Source</a>`
						: ``}
				</p>
			{/if}
		</div>
		{#if qmp.renewActive6}
			<div class="myChart" id="myChart" />
		{/if}
	</div>
</body>

<style>
	#map {
		height: 80%;
		margin: auto;
		width: 80%;
		grid-area: map;
	}

	.info {
		width: 100%;
		margin: auto;
		grid-area: info;
	}

	.myChart {
		padding-top: 20px;
		margin: auto;
		height: 500px;
		width: 100%;
		grid-area: myChart;
	}

	* {
		color: black;
	}

	a, a:visited {
		color: black;
	}

	p {
		font-size: 1.5rem;
		padding-left: 20px;
	}

	h3 {
		font-size: 1.5rem;
		padding-left: 10px;
	}

	h1 {
		text-align: center;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 10px;
		padding: 5vw;

		grid-template-areas:
			'info map'
			'myChart myChart';
	}

	@media (orientation: portrait) {
		.grid-container {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-areas:
				'info'
				'map'
				'myChart';
		}

		#map {
			max-height: 400px;
			height: 80%;
			/* margin: auto; */
			width: 90%;
			grid-area: map;
		}

		h3 {
			padding-left: 10px;
			font-size: 1.5rem;
		}

		p {
			font-size: 1.5rem;
		}

		.info {
			width: 100%;
		}

	}
	
</style>
