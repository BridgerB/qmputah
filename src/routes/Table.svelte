<script>
	export let data;
    export let renew;
	export let showAll;
	let qmpsActive = data.qmpsActive;
	let qmpsInactive = data.qmpsInactive;
	let qmpsRenew = data.qmpsRenew;
	let filter = '';
</script>

<div class="search">
	<span>
		<img src="search.svg" alt="search bar" id="glass" />
	</span>
	<span>
		<input placeholder="City, Zipcode, QMP name, URL, County" bind:value={filter} id="textInput" />
	</span>
</div>

<table>
	<tr>
		<th id="practiceHead" style="width: 40%; ">Medical Practice</th>
		<th id="priceHead" style="width: 5%; text-align: right;">Price</th>
		<th id="addressHead" style="width: 55%;">Address</th>
	</tr>
	{#if !renew}
		{#each qmpsActive as qmp}
			{#if JSON.stringify(qmp).toLowerCase().includes(filter.toLowerCase())}
				<tr>
					<td id="practice"><a href={qmp.urlEncoded}>{qmp.practice}</a></td>
					<td id="price" style=" text-align: right;">${qmp.newPatient}</td>
					<td id="address">{qmp.formatted_address}</td>
				</tr>
			{/if}
		{/each}
	{/if}
	{#if renew}
		{#each qmpsRenew as qmp}
			{#if JSON.stringify(qmp).toLowerCase().includes(filter.toLowerCase())}
				<tr>
					<td id="practice"><a href={qmp.urlEncoded}>{qmp.practice}</a></td>
					<td id="price" style="text-align: right; padding-right: 50px;">${qmp.renewActive6}</td>
					<td id="address">{qmp.formatted_address}</td>
				</tr>
			{/if}
		{/each}
	{/if}
	{#if showAll}
		{#each qmpsInactive as qmp}
			{#if JSON.stringify(qmp).toLowerCase().includes(filter.toLowerCase())}
				<tr>
					<td id="practice"><a href={qmp.urlEncoded}>{qmp.practice}</a></td>
					<td id="price" style="text-align: right;">Not Online</td>
					<td id="address">{qmp.formatted_address}</td>
				</tr>
			{/if}
		{/each}
	{/if}
</table>

<div id="email">
	<p>Did I miss one?</p>
	<p>Email me at:</p>
	<p>contact@qmputah.com</p>

</div>

<style>
	#email {
		text-align: center;
		font-size: 2rem;
		margin-top: 300px;

		margin-bottom: 300px;
	}
	table {
		/* font-size: 20px; */
		border-collapse: collapse;
		margin-left: auto;
		margin-right: auto;
		background-color: #ad8972;
		width: clamp(700px, 90%, 1200px);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	th {
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: #d3b973;
		text-align: left;
		padding: 10px;
	}

	td {
		padding: 10px;
	}

	.search {
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: clamp(700px, 90%, 1200px);
	}

	#glass {
		margin-top: 15px;
		margin-bottom: 40px;
		width: 40px;
	}

	input {
		color: black;
		line-height: 45px;
		width: 120%;
		margin: 10px;
		font-size: 1rem;
	}

	a, a:visited {
		color: black;
	}

	* {
		color: black;
	}

	tr:nth-child(even) {
		background: #fff9ee;
	}

	tr:nth-child(odd) {
		background: #ebe3cd;
	}

	@media (orientation: portrait) {
		table {
			table-layout: auto;
			width: 100%;
		}

		#address {
			font-size: 1rem;
		}

		#price {
			font-size: 1rem;
		}

		#practice {
			font-size: 1rem;
		}

		.search {
			margin: 0;
			max-width: 70%;
		}

		input {
			color: black;
			line-height: 45px;
			width: 135%;
			margin: 10px;
			font-size: 1rem;
		}

	}
    
</style>
