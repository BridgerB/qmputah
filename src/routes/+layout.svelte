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
	header {
		text-align: center;
		padding: 30px;
		background-color: #828f71;
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
		background-color: #f5e4ce;
	}
	@media (orientation: portrait) {
		header {
			text-align: center;
			padding: 30px;
			background-color: #828f71;
			font-size: 30px;
		}
		a,
		a:visited {
			color: black;
			padding: 7px;
		}
	}
</style>
