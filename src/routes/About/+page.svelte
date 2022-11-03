<script>
	////////////////////////////////////////////////////////////////////////////
	//firebase:
	import { onMount } from 'svelte';
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
</script>
<header>
	<p>About this website</p>
</header>

<div>
	<p>I built this website to automatically update its pricing every morning at 9:00am.</p>
	<p>All information on this website is gathered from public sources.</p>
	<p>Please support me and this project by <a href="/Donate">donating</a>.</p>
</div>

<style>
	div {
		width: 70%;
		margin: auto;
		font-size: 2rem;
	}

	a, a:visited {
		color: black;
	}

	header {
		text-align: center;
		font-size: 4rem;
		padding: 30px;
	}

	@media (orientation: portrait) {
		p {
			font-size: 2rem;
		}

	}
	
</style>
