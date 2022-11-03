<script>
	let postId;
	$: active = false;
	let automated = false;
	let practice = null;
	let providers = null;
	let transfer = null;
	let priceOnline = false;
	let url = null;
	let urlPrice = null;
	let newPatient = null;
	let renewActice6 = null;
	let renewActice12 = null;
	let renewExpired = null;
	let updateMethod = null;
	let address = null;
	let phoneNumber = null;
	let textNumber = null;
	let faxNumber = null;
	let email = null;
	let notes = null;
	let discounts = null;
	let insurance = false;

	import { initializeApp, getApps, getApp } from 'firebase/app';
	import { getDatabase, ref, update, serverTimestamp } from 'firebase/database';
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
	const app = initializeApp(firebaseConfig);
	function writeFixedAddress(returnedAddressJSON) {
		const db = getDatabase();
		const postData = {
			automated: automated ? automated : null,
			practice: practice,
			providers: { 0: providers },
			priceOnline: priceOnline ? priceOnline : null,
			url: url,
			urlPrice: urlPrice,
			transfer: transfer,
			timestamp: serverTimestamp(),
			address: returnedAddressJSON.results[0],
			phoneNumber: phoneNumber,
			textNumber: textNumber,
			faxNumber: faxNumber,
			email: email,
			notes: notes,
			discounts: discounts ? { 0: discounts } : null,
			insurance: insurance ? insurance : null
		};
		const updates = {};
		updates[`/qmpsCorrected/` + postId] = postData;
		return update(ref(db), updates);
	}
	function handleClick() {
		let a = 444;
		writeNewQMP(a, a, a, a);
	}
	let inputAddress = null;
	async function getGeo() {
		const res = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}&key=AIzaSyC8c9rFwqGZc8wLOjmGtsj0v5gpZ9HHHZA`
		);
		// const text = await res.json();
		const text = await res.json();
		if (res.ok) {
			writeFixedAddress(text);
			return text;
		} else {
			throw new Error(text);
		}
	}
	let promise = getGeo();
	function handleSubmitGeo() {
		promise = getGeo();
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmitGeo} class="handleSubmitGeo">
		<input type="text" placeholder="id" bind:value={postId} /><br />
		<input type="checkbox" placeholder="automated" bind:checked={automated} />automated<br />
		<input type="text" placeholder="practice" bind:value={practice} /><br />
		<input type="text" placeholder="providers(one for now)" bind:value={providers} /><br />
		<input type="checkbox" placeholder="priceOnline" bind:checked={priceOnline} />priceOnline<br />
		<input type="text" placeholder="url" bind:value={url} /><br />
		<input type="text" placeholder="urlPrice" bind:value={urlPrice} /><br />
		<input type="text" placeholder="transfer" bind:value={transfer} /><br />
		<input type="text" placeholder="inputAddress" bind:value={inputAddress} /><br />
		<input type="text" placeholder="phoneNumber" bind:value={phoneNumber} /><br />
		<input type="text" placeholder="textNumber" bind:value={textNumber} /><br />
		<input type="text" placeholder="faxNumber" bind:value={faxNumber} /><br />
		<input type="text" placeholder="email" bind:value={email} /><br />
		<input type="text" placeholder="notes" bind:value={notes} /><br />
		<input type="text" placeholder="discounts(max1fornow)" bind:value={discounts} /><br />
		<input type="checkbox" placeholder="insurance" bind:checked={insurance} />insurance<br />
		<button type="submit">Submit</button>
	</form>
	{#await promise}
		<p>...waiting</p>
	{:then geo}
		{JSON.stringify(geo.results[0].formatted_address)}
	{/await}
</div>
