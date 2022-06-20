<script lang="ts">
	export let tags: string[];
	console.log(tags);
</script>

<ul class="flex flex-col gap-2">
	{#each tags as tag}
		<li style="list-style-type: square;" class="list-inside">
			<a sveltekit:prefetch href="/tags/{tag}">{tag}</a>
		</li>
	{/each}
</ul>
