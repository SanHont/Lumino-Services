<script>
	import { onMount } from 'svelte';
	export let data;
	import { gsap } from 'gsap';

	onMount(() => {});
</script>

<section>
	<div class="about-me">
		<h2 class="title">Who am I?</h2>
	</div>
	<div class="reviews">
		<h2 class="title">Reviews</h2>
		<div class="testimonial">
			<p>
				Sander transformed our website with her exceptional technical skills and creative design,
				making the entire process smooth and enjoyable. I highly recommend her for any web
				development project.
			</p>
			<div class="next-previous">
				<div class="background">
					<img class="previous" src="/assets/arrow-left.svg" alt="" />
				</div>
				<div class="background">
					<img class="next" src="/assets/arrow-right.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
	<div class="back-to-top">
		<h2 class="title">Back To <span class="bttt">The Top</span></h2>
		<img class="bttt-arrow" src="assets/bttt.svg" alt="" />
	</div>
	<div class="package-1">
		<h2 class="title">{data.landingPages[0].package1}</h2>
	</div>
	<div class="package-2">
		<h2 class="title">{data.landingPages[0].package2}</h2>
	</div>
	<div class="package-3">
		<h2 class="title">{data.landingPages[0].package3}</h2>
	</div>
	<div class="contact-me">
		<h2 class="title">Contact</h2>
	</div>
</section>

<style>
	img {
		width: 3rem;
	}
	section {
		background-color: var(--section-background);
		padding: 4rem;
		margin: 1rem;
		border-radius: 0.8rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 0.5fr 1fr;
		grid-auto-columns: 1fr;
		gap: 10px 10px;
		grid-auto-flow: row;
		grid-template-areas:
			'about-me about-me reviews back-to-top'
			'about-me about-me reviews contact'
			'package-1 package-2 package-3 contact';
	}

	.about-me,
	.reviews,
	.back-to-top,
	.package-1,
	.package-2,
	.package-3,
	.contact-me {
		background-color: var(--card-color);
		width: 100%;
		color: var(--light-text-color);
		height: 100%;
		border-radius: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bttt {
		display: block;
		margin-top: 1rem;
	}

	.bttt-arrow {
		margin-left: 4rem;
		transform: rotate(-90deg);
		width: 4rem;
		transition: 0.3s;
	}

	.bttt-arrow:hover {
		scale: 1.15;
		cursor: pointer;
	}

	h2 {
		font-size: 2.5rem;
	}

	.about-me {
		grid-area: about-me;
	}
	.reviews {
		flex-direction: column;
		grid-area: reviews;
	}

	.testimonial {
		background-color: var(--testimonial-card);
		color: var(--text-color);
		margin: 2rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 70%;
		border-radius: 0.8rem;
		padding: 1rem 2rem;
		line-height: 1.4;
	}
	.next-previous {
		display: flex;
		margin-top: 5rem;
		gap: 6rem;
		justify-content: center;
	}
	.background {
		display: flex;
		justify-content: center;
		border-radius: 5rem;
		align-items: center;
		width: 3rem;
		height: 3rem;
		transition: 0.3s;
		background-color: var(--button);
	}
	.next,
	.previous {
		width: 2rem;
		border-radius: 5rem;
	}

	.background:hover {
		scale: 1.15;
		cursor: pointer;
	}
	.back-to-top {
		grid-area: back-to-top;
		display: flex;
		justify-content: start;
	}

	.back-to-top > .title {
		margin-left: 2rem;
	}
	.contact-me {
		grid-area: contact;
	}
	.package-1 {
		height: 18rem;
		grid-area: package-1;
	}
	.package-2 {
		grid-area: package-2;
	}
	.package-3 {
		grid-area: package-3;
	}
</style>
