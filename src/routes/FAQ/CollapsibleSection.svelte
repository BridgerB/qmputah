<script>
	// based on suggestions from:
	// Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
	export let headerText;
	let expanded = false;
</script>
<div class="collapsible">
	<h3>
		<button aria-expanded={expanded} on:click={() => (expanded = !expanded)}
			><p class="faqq">{headerText}</p>
			<svg viewBox="0 0 20 20" fill="none">
				<path class="vert" d="M10 1V19" stroke="black" stroke-width="2" />
				<path d="M1 10L19 10" stroke="black" stroke-width="2" />
			</svg>
		</button>
	</h3>
	<div class="contents" hidden={!expanded}>
		<slot />
	</div>
</div>
<style>
	.faqq {
		color: black;
		font-size: 0.8rem;
		margin: 0;
		padding: 0;
	}
  
	.collapsible {
		border-bottom: 1px solid var(--gray-light, #eee);
	}

	h3 {
		margin: 0;
	}

	button {
		background-color: var(--background, #fff);
		color: var(--gray-darkest, #282828);
		display: flex;
		justify-content: space-between;
		width: 100%;
		border: none;
		margin: 0;
		padding: 1em 0.5em;
	}

	button[aria-expanded='true'] {
		border-bottom: 1px solid var(--gray-light, #eee);
	}

	button[aria-expanded='true'] .vert {
		display: none;
	}

	button:focus svg {
		outline: 2px solid;
	}

	button [aria-expanded='true'] rect {
		fill: currentColor;
	}

	svg {
		height: 0.7em;
		width: 0.7em;
	}

	@media (orientation: landscape) {
		.faqq {
			font-size: 1.2rem;
		}
	}
</style>
