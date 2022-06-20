<script lang="ts">
	import { darkMode } from '$lib/store';
	export let matchingPosts: any;
</script>

<div class="flex flex-col gap-4">
	{#each matchingPosts as post, index}
		<div>
			<a sveltekit:prefetch href="/{post.path}">{post.title}</a>
			<p class="text-sm {$darkMode ? 'text-mildBlue' : 'text-darkerBlue'} opacity-80">
				{post.published}
			</p>
			<p>{post.excerpt}</p>
			<a
				sveltekit:prefetch
				class="float-right {$darkMode ? 'text-mildBlue' : 'text-darkerBlue'}"
				href="/{post.path}">read more</a
			>
		</div>
		<hr
			class:hidden={index === matchingPosts.length - 1}
			class="border-dashed border-2 text-mildBlue border-darkerBlue"
		/>
	{/each}
</div>
