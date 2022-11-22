<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</svelte:head>

<div class="backgroundColor">
	<div class="grid-container">
		<img src="aleafFlip.webp" alt="cannabis leaf" id="leafLeft" />
		<h1 id="main">QMP<br />UTAH</h1>
		<img src="aleaf.webp" alt="cannabis leaf" id="leafRight" />
		<p id="tagLine">Medical Card<br />Price Comparison Tool</p>
	</div>
</div>

<style>
	.backgroundColor {
		background-color: #fff9ee;
	}

	.grid-container {
		max-width: 500px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 40%; /*??? but it works..*/
		grid-template-areas:
			'leafLeft main leafRight'
			'tagLine tagLine tagLine';
		text-align: center;
		padding-top: 1rem;
		margin: auto;
		padding-right: 1rem;
		padding-left: 1rem;
		font-family: 'Didact Gothic', sans-serif;
	}

	#leafLeft {
		padding-top: 2vh;
		height: auto;
		margin: auto;
		display: leafLeft;
		height: 6rem;
	}

	#leafRight {
		display: leafRight;
		height: 6rem;
		margin: auto;
		padding-top: 2vh;
	}

	#main {
		margin: auto;
		padding: 0px;
		grid-area: main;
		text-align: center;
		font-size: 3rem;
	}

	#tagLine {
		grid-area: tagLine;
		font-size: 2rem;
	}

	@media (orientation: landscape) {
		#main {
			font-size: 5rem;
		}
		.grid-container {
			max-width: 900px;
			grid-template-rows: 1fr 0.5fr; /*???*/
		}
		#leafLeft {
			padding-top: 2vh;
			height: auto;
			margin: auto;
			display: leafLeft;
			height: 12rem;
		}

		#leafRight {
			display: leafRight;
			height: 12rem;
			margin: auto;
			padding-top: 2vh;
		}
	}

</style>
