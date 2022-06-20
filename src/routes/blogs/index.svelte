<script lang="ts">
	import { darkMode } from '$lib/store';
	export let posts: any;
</script>

<div class="flex flex-col gap-4">
	{#each posts as post, index}
		<div>
			<a href="/blogs/{post.path}" sveltekit:prefetch>{post.title}</a>
			<p class="text-sm {$darkMode ? 'text-mildBlue' : 'text-darkerBlue'} opacity-80">
				{post.published}
			</p>
			<p>{post.excerpt}</p>
			<a
				sveltekit:prefetch
				class="float-right {$darkMode ? 'text-mildBlue' : 'text-darkerBlue'}"
				href="/blogs/{post.path}">read more</a
			>
		</div>
		<hr
			class:hidden={index === posts.length - 1}
			class="border-dashed border-2 text-mildBlue border-darkerBlue"
		/>
	{/each}
</div>
