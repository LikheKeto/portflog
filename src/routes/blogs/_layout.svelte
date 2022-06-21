<script lang="ts">
	import { darkMode } from '$lib/store';
	import { convertDate } from '$lib/utils';
	import Icon from '@iconify/svelte';
	export let title;
	export let date;
	export let excerpt;
	export let tags;

	$: textColor = $darkMode ? 'text-primary-light' : 'text-primary-dark';
</script>

<svelte:head>
	<meta name="description" content={excerpt} />
	<meta name="keywords" content={tags} />
</svelte:head>

<div class="flex w-full justify-end">
	<button
		on:click={() => history.back()}
		class="border-b-4 hover:bg-highlight transition-all hover:text-primary-light flex items-center gap-2 border-highlight"
		><Icon icon="akar-icons:arrow-left" inline={true} />go back</button
	>
</div>
<h2 class="my-4 text-4xl font-semibold">{title}</h2>
<p class="my-4 text-gray-500">{convertDate(date)}</p>
<div
	style="max-width: fit-content;"
	class="prose {textColor}
     prose-blockquote:text-primary-light prose-blockquote:border-darkerBlue
     prose-blockquote:bg-highlight prose-a:no-underline
     {$darkMode ? 'prose-a:text-primary-light' : 'prose-a:text-primary-dark'}
     {$darkMode ? 'prose-strong:text-primary-light' : 'prose-strong:text-primary-dark'}
     {$darkMode ? 'prose-headings:text-primary-light' : 'prose-headings:text-primary-dark'}
     prose-code:bg-code prose-code:p-1 prose-code:rounded-md prose-code:text-primary-light
     {$darkMode ? 'prose-li:marker:text-primary-light' : 'prose-li:marker:text-primary-dark'}"
>
	<slot />
</div>
