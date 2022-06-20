<script lang="ts">
	import { darkMode } from '$lib/store';
	import { convertDate } from '$lib/utils';
	export let title;
	export let date;

	$: textColor = $darkMode ? 'text-primary-light' : 'text-primary-dark';
</script>

<h2 class="my-4 text-4xl font-semibold">{title}</h2>
<p class="my-4 text-gray-500">{convertDate(date)}</p>
<div
	class="prose {textColor} lg:prose-xl
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
