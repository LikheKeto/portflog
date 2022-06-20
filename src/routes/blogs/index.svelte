<script lang="ts">
	export let posts: any;
</script>

<ul>
	{#each posts as post}
		<li>
			<a href="/blogs/{post.path}" sveltekit:prefetch>{post.title}</a>
		</li>
	{/each}
</ul>
