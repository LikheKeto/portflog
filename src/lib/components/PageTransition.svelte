<script>
	import { slide } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 200;
</script>

{#key url}
	<div
		in:slide={{ duration: pageTransitionDuration }}
		out:slide={{ duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
