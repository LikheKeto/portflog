<script>
	import { darkMode } from '$lib/store';
	import Icon from '@iconify/svelte';
</script>

<header>
	<nav class="flex flex-wrap justify-between items-center">
		<div class="flex flex-wrap space-x-4">
			<a href="/">likheketo@lk</a>
			<p>|</p>
			<a href="/blogs">blogs</a>
			<a href="/tags">tags</a>
		</div>
		<button on:click={() => darkMode.update((curr) => !curr)}>
			<Icon icon="feather:{$darkMode ? 'sun' : 'moon'}" rotate={3} width="2rem" />
		</button>
	</nav>
</header>
