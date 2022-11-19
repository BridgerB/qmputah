<script>
	import { onMount } from 'svelte';
	export let data;
	import Map from './Map.svelte';
	import Table from './Table.svelte';
	import Header from './Header.svelte';
	let renew;
	let showAll;

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
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="description" content="A tool to compare medical cannabis card pricing in Utah" />
	<meta name="keywords" content="utah cannabis medical card price" />
</svelte:head>
<!-- <br /> -->
<!-- <br /> -->
<!-- <br /> -->
<Header />
<div class="timeline">
	<button on:click={() => (renew = false)} id="newCard">My first card</button>
	<button on:click={() => (renew = true)} id="renewCard">Renew my card</button>
</div>

<body>
	<Map {data} {renew} {showAll} />
	<br />
	<div class="hidden">
		Show Hidden QMPs <input type="checkbox" bind:checked={showAll} />
	</div>
	<br />
	<br />
	<Table {data} {renew} {showAll} />
</body>

<style>
	.hidden {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		padding-top: 10px;
		font-size: 1.5rem;
	}

	button {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		background-color: #fff9ee;
		height: 80px;
		border-radius: 15px;
		border: none;
		cursor: pointer;
		margin-top: 50px;
		margin-bottom: 50px;
		font-size: 1.2rem;
		margin: 5px;
		padding: 0.5rem;
	}

	.timeline {
		max-width: 1000px;
		margin: auto;
		width: 60%;
		display: grid;
		padding-top: 20px;
		width: 90%;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'newCard renewCard';
	}
	input[type='checkbox'] {
		transform: scale(1.5);
	}

	@media (orientation: landscape) {
	button {
	
		margin-left: 10%;
		margin-right: 10%;
	}

	}
</style>
