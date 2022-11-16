<svelte:head>
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" /> -->
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> -->
	<!-- <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" /> -->
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->

<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
<!-- <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,900;1,900&display=swap" rel="stylesheet"> -->


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet"> -->




</svelte:head>

<div class="grid-container">
	<img src="aleafFlip.webp" alt="cannabis leaf" id="leafLeft" />
	<h1 id="main">QMP<br>UTAH</h1>
	<img src="aleaf.webp" alt="cannabis leaf" id="leafRight" />
  <p id="tagLine">Medical Card<br>Price Comparison Tool</p>
</div>

<style>
	/* .main { */
	/* 	font-size: 85px; */
	/* 	font-family: 'Raleway', sans-serif; */
	/* } */
	/*  */
	/* h1 { */
	/* 	text-align: center; */
	/* 	font-size: 8rem; */
	/* 	padding: 0px; */
	/* } */
	/**/
	/* p { */
	/* 	text-align: center; */
	/* 	font-size: 2rem; */
	/* } */
	/**/
	/* .grid-container { */
	/* 	border: dashed red; */
	/*   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
	/* 	border-radius: 15px; */
	/* 	margin: auto; */
	/* 	width: clamp(700px, 90%, 1200px); */
	/* 	display: grid; */
	/* 	grid-template-columns: 1fr 1fr 1fr; */
	/* 	background-color: #d4a88d; */
	/* 	grid-template-areas: 'title leafRight'; */
	/* } */
	/**/
	/* #leafLeft { */
	/* 	grid-area: leafLeft; */
	/* 	height: 300px; */
	/* 	padding: 50px; */
	/* } */
	/**/
	/* #leafRight { */
	/* 	grid-area: leafRight; */
	/* 	height: 600px; */
	/* 	padding: 50px; */
	/* } */
	/**/
	/* #title { */
	/* 	color: #515b42; */
	/* 	grid-area: title; */
	/* 	margin: auto; */
	/* } */

	@media (orientation: portrait) {
		.grid-container {
			/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
			/* border-radius: 15px; */
			/* width: 100%; */
			max-width: 600px;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas: 
			'leafLeft main leafRight'
			'tagLine tagLine tagLine';
			text-align: center;
			padding-top: 2rem;
			margin: auto;
			background-color: #fff9ee ;
			padding-right: 1rem;
			padding-left: 1rem;
			font-family: 'Didact Gothic' , sans-serif;
		}

		#leafLeft {
		/* max-width: 100%; */
		height: auto;
		/* border: dashed red; */
			margin: auto;
			display: leafLeft;
			height: 6rem;
		 /*	width: 100%;
			/* padding: 0px; */
		}

		#leafRight {
		/* max-width: 100%; */
		/* height: auto; */
		/* border: dashed red; */
			display: leafRight;
			height: 6rem;
			margin: auto;
			/* width: 100%; */
			/* height: 100px; */
			/* margin: auto; */
			/* padding: 60px; */
		}

		#main {
			/* margin: 0px; */
			margin: auto;
			padding: 0px;
			grid-area: main;
			text-align: center;
			font-size: 3rem;
		}

		#tagLine {
		grid-area: tagLine;
		/* text-align: center; */
		/* margin: auto; */
		font-size: 30px;
		}

		/* .main { */
			/* font-size: 3rem; */
		/* } */
	}
</style>
