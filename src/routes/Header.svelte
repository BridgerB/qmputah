<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
</svelte:head>

<div class="grid-container">
	<img src="leaf1flop.png" alt="cannabis leaf" id="leafLeft" />
	<div id="title">
		<h1 id="main">QMP UTAH</h1>
		<p>Medical Cannabis Card Pricing</p>
	</div>
	<img src="leaf1.png" alt="cannabis leaf" id="leafRight" />
</div>

<style>
	#main {
		font-size: 85px;
		font-family: 'Raleway', sans-serif;
	}
	
	h1 {
		text-align: center;
		font-size: 4rem;
	}

	p {
		text-align: center;
		font-size: 2rem;
	}

	.grid-container {box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 15px;
		margin: auto;
		width: clamp(700px, 90%, 1200px);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		background-color: #d4a88d;
		grid-template-areas: 'leafLeft title title leafRight';
	}

	#leafLeft {
		grid-area: leafLeft;
		height: 300px;
		padding: 50px;
	}

	#leafRight {
		grid-area: leafRight;
		height: 300px;
		padding: 50px;
	}

	#title {
		grid-area: title;
		margin: auto;
	}

	@media (orientation: portrait) {
		.grid-container {
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 15px;
			width: 80%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-areas: 'leafLeft' 'title';
			text-align: center;
		}

		#leafLeft {
			margin: auto;
			display: leafLeft;
			height: 100px;
			padding: 10px;
		}

		#leafRight {
			display: none;
		}

		#title {
			margin: 0px;
			padding: 0px;
			grid-area: title;
		}

		#main {
			font-size: 3rem;
		}
	}
</style>
