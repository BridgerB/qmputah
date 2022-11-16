<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet">


</svelte:head>

<title>qmputah</title>
<body>
	<header>
		<a href="/">Home</a>
		<a href="/About">About</a>
		<a href="/Donate">Donate</a>
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
	}
	@media (orientation: portrait) {
		header {
			text-align: center;
			padding: 30px;
			font-size: 30px;
		}
		a,
		a:visited {
			color: black;
			padding: 7px;
		}
	}
</style>
