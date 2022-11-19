<script>
	import CollapsibleSection from './CollapsibleSection.svelte'
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

<h1>FAQ</h1>

<section>
<CollapsibleSection headerText={'What is a QMP?'}>
	<div class="content">
		<p>A QMP is the person you get your medical card from.</p>
	</div>
</CollapsibleSection>
<CollapsibleSection headerText={`Why is the States version of this website so inacurate? `} >
	<div class="content">
	<p>Great question...</p>
	</div>
</CollapsibleSection>
<CollapsibleSection headerText={`What does it ACTUALLY cost?`} >
	<div class="content">
	<p>Lets put it this way. What is the least I can spend to legally use cannabis in Utah?</p>
	<br />
	<table>
	<tr>
		<th />
		<th>Price</th>
	</tr>
	<tr>
		<td>Card</td>
		<td>$100</td>
	</tr>
	<tr>
		<td>State Fee</td>
		<td>$15</td>
	</tr>
	<tr>
		<td>10 pack of edibles</td>
		<td>$10</td>
	</tr>
	<tr>
		<td>State Tax</td>
		<td>$3</td>
	</tr>
	<tr>
		<td>Total</td>
		<td>$128</td>
	</tr>

	</table>
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`How much does cannabis cost in Utah?`} >
	<div class="content">
		<p>Pharmacies list their prices online. You can see a list of pharmacies on the <a href="https://medicalcannabis.utah.gov/pharmacies/" target="_blank">State website</a>.</p>

	</div>
	</CollapsibleSection>

<CollapsibleSection headerText={`Is this project actively being worked on?`} >
	<div class="content">
	<p>Yes! You can see updates as they happen on <a href="https://github.com/BridgerB/qmputah" target="_blank">github</a>.</p>
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`How can I help this project succeed?`} >
	<div class="content">
	<p>Please visit our <a href="/Contribute">Contribute</a> page.</p>
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`Am I eligible for a medical card?`} >
	<div class="content">
   <p>Please see the <a href="https://medicalcannabis.utah.gov/ufaqs/what-are-the-qualifying-conditions/" target="_blank">States list of qualifying conditions</a></p>
   <p>The only qualifying condition that requires a doctor's note is PTSD. The most common qualifying condition is pain.</p>
	</div>
  </CollapsibleSection>
<CollapsibleSection headerText={`What if I don't see my question here?`} >
	<div class="content">
  <p>The <a href="https://medicalcannabis.utah.gov/patients/" target="_blank">State FAQ page</a> might be able to help.</p>
  </div>
  </CollapsibleSection>
<CollapsibleSection headerText={`How does this website work?`} >
	<div class="content">
	<p>This website is updated daily at 9:00am to show you the most accurate medical card pricing in Utah.</p>
	</div>
	</CollapsibleSection>

	<CollapsibleSection headerText={`How can I suggest an edit to this website?`} >
	<div class="content">
	<p>Prefered (in order to keep this website transparent):</p>
	<p>If you know how to code then please submit a pull request on <a href="https://github.com/BridgerB/qmputah" target="_blank">github</a>. If you don't know how to code then please submit an issue on <a href="https://github.com/BridgerB/qmputah/issues" target="_blank">github</a></p>
	<br />
	<p>Unpreferred (because I want to keep this website as transparent as possible): </p>
	<p>Email me at	<a href = "mailto: contact@qmputah.com">contact@qmputah.com</a></p>
	</div>
	</CollapsibleSection>
</section>

<style>

	p {
		/* font-size: 1.5rem; */
		padding: 0;
		margin: 0;
	}
	h1 {
		text-align: center;
		padding: 3vh;
	}
	section {
		width: 90%;
		margin: auto;
		font-size: 1.2rem;
		/* color: green; */
		padding-bottom: 20vh;
		
	}
	
	.content {
		background-color: #f4f4f4;
		padding: 0.5em;
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
		width: 80%;
		text-align: left;
		background-color: #ad8972;
		/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
	}

	tr:nth-child(even) {
		background: #dfd3ae;
	}
	
	tr:nth-child(odd) {
		background: #ebe3cd;
	}

	@media (orientation: landscape) {
		table {
		max-width: 550px;
		}
	section {
		max-width: 1000px;
		/* margin: auto; */
		font-size: 1.2rem;
		/* color: green; */
		
	}

	}
	
</style>
