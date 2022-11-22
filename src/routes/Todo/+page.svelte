<script>
	export const prerender = false;
	export let data;
	let qmpsBroken = data.qmpsBroken;
	let filter = '';
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

<div id="todo">
	<h1>Todo</h1>
	<p>
		These qmps have recently updated their website, or their website was down when the program
		checked their website.
	</p>
	<p>We are working on/looking into these qmps.</p>
</div>
<br />
<br />
<table>
	{#each qmpsBroken as qmp}
		<tr>
			<td><a href={qmp.urlEncoded}>{qmp.practice}</a></td>
		</tr>
	{/each}
</table>

<style>
	table {
		font-size: 20px;
		margin-bottom: 300px;
		border-collapse: collapse;
		margin-left: auto;
		margin-right: auto;
		background-color: #ad8972;
		width: 70%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	th {
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: rgb(212, 135, 90);
		text-align: left;
		padding: 10px;
	}

	td {
		border-bottom: 1px solid black;
		padding: 10px;
	}

	.search {
		margin: auto;
		justify-content: flex-start;
		display: flex;
		flex-direction: row;
		width: 70%;
		padding-left: calc(70vw / 2);
	}

	#glass {
		margin-top: 10px;
		margin-bottom: 40px;
		height: 45px;
	}

	input {
		color: black;
		line-height: 45px;
		font-size: 25px;
		margin: 10px;
	}

	a,
	a:visited {
		color: black;
	}

	* {
		color: black;
	}

	button {
		color: black;
	}

	tr:nth-child(even) {
		background: #dfd3ae;
	}

	tr:nth-child(odd) {
		background: #ebe3cd;
	}

	#todo {
		width: 70%;
		margin: auto;
	}
</style>
