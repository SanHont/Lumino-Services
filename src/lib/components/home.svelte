<script>
	import { onMount } from 'svelte';
	export let data;
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.to('.contact', {
			scale: 1.3,
			duration: 2,
			stagger: {
				each: 0.5,
				repeat: -1
			}
		});
	});
</script>

<section>
	<div class="logo">Lumino Services</div>
	<div class="contact">Let's <span>Talk</span></div>
	<h1 class="title">
		{data.landingPages[0].quote}
	</h1>
	<div class="summary">
		{data.landingPages[0].content}
	</div>

	<div class="socials">
		<a href="https://www.instagram.com/_sander.dh/" target="_blank"
			><img src="assets/instagram.svg" alt="Click for our instagram." loading="lazy" /></a
		>
		<a href="https://www.linkedin.com/in/sander-dh/" target="_blank">
			<img src="assets/linkedin.svg" alt="Click for our linkedin." loading="lazy" /></a
		>
		<div class="about-me">ABOUT ME</div>
	</div>
	<div class="scroll-down"></div>
</section>

<style>
	section {
		background-color: var(--section-background);
		padding: 1rem;
		margin: 1rem;
		border-radius: 0.8rem;
		display: grid;
		grid-template-columns: 1.2fr 0.7fr;
		grid-template-rows: 0.4fr 3.2fr 0.4fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'logo contact'
			'title summary'
			'socials scroll-down';
	}

	.logo {
		margin-top: 3rem;
		font-weight: 600;
		font-size: 2rem;
		margin-left: 3rem;
		grid-area: logo;
	}

	.contact {
		color: var(--button-text);
		text-align: center;
		flex-direction: column;
		display: flex;
		justify-content: center;
		margin: 3rem;
		margin-left: auto;
		font-size: 1rem;
		font-weight: 800;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: var(--button);
		grid-area: contact;
		transition: 0.3s;
	}

	.contact:hover,
	.about-me:hover,
	img:hover {
		scale: 1.15;
		cursor: pointer;
	}

	.title {
		margin-left: 3rem;
		grid-area: title;
		font-size: 4rem;
		max-width: 80%;
		margin-top: 22rem;
		flex-direction: column;
		display: flex;
		font-family: 'Antic Slab', serif;
		font-weight: 400;
		font-style: normal;
	}

	.summary {
		grid-area: summary;
		margin-top: 22rem;
		margin-right: 3rem;
		font-size: 1.4rem;
		flex-direction: column;
		display: flex;
		font-family: 'Antic', serif;
		font-weight: 400;
		font-style: normal;
	}

	.socials {
		grid-area: socials;
		display: flex;
		align-items: center;
		margin-left: 3rem;
		margin-bottom: 3rem;
	}

	.about-me {
		font-weight: 800;
		border-radius: 5rem;
		color: var(--button-text);
		background-color: var(--button);
		padding: 0.65rem;
		margin-left: 0.5rem;
		transition: 0.3s;
	}

	img {
		width: 3rem;
		transition: 0.3s;
	}

	.scroll-down {
		grid-area: scroll-down;
	}
</style>
