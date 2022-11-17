<!-- <script> -->
<!-- 	//////////////////////////////////////////////////////////////////////////// -->
<!-- 	//firebase: -->
<!-- 	import { onMount } from 'svelte'; -->
<!-- 	import { initializeApp } from 'firebase/app'; -->
<!-- 	// import { getAnalytics } from 'firebase/analytics'; -->
<!-- 	const firebaseConfig = { -->
<!-- 		apiKey: 'AIzaSyA-xQRwvNDSuujhcAwsXoxIJMoyfqhoq_4', -->
<!-- 		authDomain: 'qmputah-2022-10-06.firebaseapp.com', -->
<!-- 		databaseURL: 'https://qmputah-2022-10-06-default-rtdb.firebaseio.com', -->
<!-- 		projectId: 'qmputah-2022-10-06', -->
<!-- 		storageBucket: 'qmputah-2022-10-06.appspot.com', -->
<!-- 		messagingSenderId: '677877744052', -->
<!-- 		appId: '1:677877744052:web:8ad4b1d83774b5425072e1', -->
<!-- 		measurementId: 'G-E36TVKC3N0' -->
<!-- 	}; -->
<!-- 	onMount(() => { -->
<!-- 		const app = initializeApp(firebaseConfig); -->
<!-- 		const analytics = getAnalytics(app); -->
<!-- 	}); -->
<!-- 	//////////////////////////////////////////////////////////////////////////// -->
<!-- </script> -->
<script>
	import CollapsibleSection from './CollapsibleSection.svelte'
</script>

<h1>FAQ</h1>
<section>
<CollapsibleSection headerText={'Why do the prices range from $100 to $500?'} >
	<div class="content">
		Great question...	
	</div>
</CollapsibleSection>
<CollapsibleSection headerText={`Why is the States version of this website so inacurate? `} >
	<div class="content">
	Great question...	
	</div>
</CollapsibleSection>
<CollapsibleSection headerText={`What does QMP stand for?`} >
	<div class="content">
	Qualified Medical Provider. It is the person who would prescribe you your medical card.
	</div>
	</CollapsibleSection>

<CollapsibleSection headerText={`What does it ACTUALLY cost?`} >
	<div class="content">
	Lets put it this way. What is the least I can spend to legally use cannabis in Utah?
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
<CollapsibleSection headerText={`How much does cannabis itself cost?`} >
	<div class="content">
		Pharmacies list their prices online. You can see a list of pharmacies on the state website: https://medicalcannabis.utah.gov/pharmacies/
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`How can I suggest an edit to this website?`} >
	<div class="content">
	If you know how to code then please submit a pull request on github. If you don't know how to code then please submit an issue on our github or email me at contact@qmputah.com
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`Is this project actively being worked on?`} >
	<div class="content">
	Yes
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`How can I help this project succeed?`} >
	<div class="content">
	Please visit our "Contribute" page.
	</div>
	</CollapsibleSection>
<CollapsibleSection headerText={`Am I eligible for a medical card?`} >
	<div class="content">
  Probably. But that decision is left to the QMP. 
	</div>
  </CollapsibleSection>
<CollapsibleSection headerText={`What if I don't see my question here?`} >
	<div class="content">
  The state FAQ page might be able to help: https://medicalcannabis.utah.gov/patients/
	</div>
  </CollapsibleSection>

	




</section>

<style>
	h1 {
		text-align: center;
		padding: 3vh;
	}
	section {
		width: 90%;
		margin: auto;
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
</style>
