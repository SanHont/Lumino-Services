<script>
	import Home from '../lib/components/home.svelte';
	import Info from '../lib/components/info.svelte';

	export let data;
</script>

<Home {data} />
<Info {data} />
