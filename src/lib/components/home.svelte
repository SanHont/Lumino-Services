<script>
	import { onMount } from 'svelte';
	export let data;
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.fromTo('.a', { opacity: 0 }, { opacity: 1, duration: 0.5 });
		gsap.fromTo('.b', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 });
		gsap.fromTo('.c', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1 });
		gsap.fromTo('.second-line', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 1.5 });
	});
</script>

<section>
	<div class="logo">Lumino Services</div>
	<div class="contact">Let's <span>Talk</span></div>
	<h1 class="title">
		<span class="first-line">
			<span class="a">Unleashing</span> <span class="b">Online</span>
			<span class="c">Potential,</span>
		</span>
		<span class="second-line">
			<span class="d">One</span> <span class="f">Line</span> <span class="e">at</span>
			<span class="f">a</span> <span class="g">Time.</span></span
		>
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
		background-color: var(--background);
		padding: 1rem;
		margin: 1rem;
		border-radius: 0.8rem;
		display: grid;
		grid-template-columns: 1.3fr 0.7fr;
		grid-template-rows: 0.4fr 2.1fr 0.5fr;
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
		font-weight: 500;
		font-size: 1.5rem;
		margin-left: 3rem;
		grid-area: logo;
	}

	.contact {
		color: #fff;
		text-align: center;
		flex-direction: column;
		display: flex;
		justify-content: center;
		margin: 3rem;
		margin-left: auto;
		font-size: 1rem;
		font-weight: 400;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: var(--background2);
		grid-area: contact;
	}

	.title {
		margin-left: 3rem;
		grid-area: title;
		font-size: 4rem;
		justify-content: center;
		flex-direction: column;
		display: flex;
	}

	.second-line {
		display: block;
	}

	.summary {
		grid-area: summary;
	}

	.socials {
		grid-area: socials;
		display: flex;
		align-items: center;
		margin-left: 3rem;
		margin-bottom: 3rem;
	}

	.about-me {
		font-weight: 500;
		border-radius: 5rem;
		color: #fff;
		background-color: var(--background2);
		padding: 0.8rem;
		margin-left: 0.8rem;
	}

	img {
		width: 3rem;
	}

	.scroll-down {
		grid-area: scroll-down;
	}
</style>
