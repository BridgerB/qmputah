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

<body>
	<header>
		<h1>Contribute</h1>
	</header>
	<h3>Price Comparison Chart</h3>
	<br />
	<table>
		<tr>
			<th />
			<th>Best price</th>
			<th>Average price</th>
			<th>Worst price</th>
		</tr>
		<tr>
			<td>Initial Visit</td>
			<td>100</td>
			<td>250</td>
			<td>500</td>
		</tr>
		<tr>
			<td>First Renewal</td>
			<td>50</td>
			<td>190</td>
			<td>250</td>
		</tr>
		<tr>
			<td>Second Renewal</td>
			<td>50</td>
			<td>190</td>
			<td>250</td>
		</tr>
		<tr>
			<td>Total</td>
			<td>200</td>
			<td>630</td>
			<td>1000</td>
		</tr>
	</table>
	<br />
	<div>
		<p>
			This tool can save you up to $800 in your first year of having a Medical Cannabis Card in
			Utah.
		</p>
		<p>Please donate a portion of those savings to keep this site accurate and opperating.</p>
		<p>Minimum donation is only $1 and will only take a moment.</p>
		<ul>
			<li>
				<a href="https://www.buymeacoffee.com/BridgerB" target="_blank">Buy Me A Coffee</a><br />
			</li>
			<li><a href="https://paypal.me/BridgerBelyea" target="_blank">PayPal</a><br /></li>
			<li><a href="https://ko-fi.com/bridgerb" target="_blank">Ko-fi (Offers Apple Pay)</a></li>
		</ul>
	</div>
	<div>
		<p>
			If you are unable to donate please help out by suggesting or offering improvements to this
			projet on <a href="https://github.com/BridgerB/qmputah" target="_blank">github</a>.
		</p>
	</div>
</body>

<style>
	div {
		width: 70%;
		margin: auto;
		font-size: 2rem;
	}

	header {
		text-align: center;
		font-size: 4rem;
		padding: 30px;
	}

	a,
	a:visited {
		color: black;
		font-size: 1.2rem;
		/* padding: 3rem; */
	}

	th {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 8px;
		text-align: right;
		background-color: #d4a88d;
	}

	td {
		padding: 7px;
		text-align: right;
		border-bottom: 1px solid black;
	}

	td:nth-child(1) {
		text-align: left;
	}

	table {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		max-width: 900px;
		border-collapse: collapse;
		background-color: rgb(212, 135, 90);
		font-size: 20px;
		width: 90%;
		text-align: left;
		background-color: #ad8972;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		table-layout: auto;
	}

	tr:nth-child(even) {
		background: #dfd3ae;
	}

	tr:nth-child(odd) {
		background: #ebe3cd;
	}

	h1 {
		font-size: 3rem;
	}

	h3 {
		margin: auto;
		font-size: 2rem;
		width: 100%;
		text-align: center;
	}

	p {
		font-size: 1.2rem;
	}

	@media (orientation: landscape) {
		table {
			max-width: 700px;
		}
		body {
			max-width: 1200px;
			margin: auto;
		}
	}
</style>
