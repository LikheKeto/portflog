<script lang="ts">
	export let tags: string[];
	console.log(tags);
</script>

<ul class="flex flex-col gap-2">
	{#each tags as tag}
		<li>
			<a href="/tags/{tag}">#{tag}</a>
		</li>
	{/each}
</ul>
