<script lang="ts" context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import { darkMode } from '../lib/store';
	import { browser } from '$app/env';
	export let url: any;
	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode.update(() => true);
		}
	});

	$: {
		if ($darkMode && browser) {
			document.body.classList.add('body-bg-dark');
			document.body.classList.remove('body-bg-light');
		} else if (browser) {
			document.body.classList.add('body-bg-light');
			document.body.classList.remove('body-bg-dark');
		}
	}
</script>

<svelte:head>
	<title>likheketo</title>
</svelte:head>

<div class="container m-auto space-y-4 my-4">
	<Header />
	<PageTransition {url}>
		<slot />
	</PageTransition>
	<Footer />
</div>
