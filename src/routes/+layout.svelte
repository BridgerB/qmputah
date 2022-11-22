<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<title>qmputah</title>
<body>
	<header>
		<a href="/">Home</a>
		<a href="/FAQ">FAQ</a>
		<a href="/Contribute">Contribute</a>
	</header>
	<slot />
</body>

<style>
	* {
		font-family: 'Didact Gothic', sans-serif;
	}
	header {
		text-align: center;
		padding: 30px;
		background-color: #d3b973;
		/* background-color: #d3af5e; I like this gold */
		font-size: 30px;
	}
	a,
	a:visited {
		color: black;
		padding: 60px;
	}
	body {
		color: black;
		margin: 0;
		padding: 0;
		background-color: #5d8066;
		/* background-color: #314e28; I like this green */
	}
	@media (orientation: portrait) {
		header {
			padding: 25px;
		}
		a,
		a:visited {
			padding: 9px;
		}
	}
</style>
