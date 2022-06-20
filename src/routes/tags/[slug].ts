import { convertDate } from '$lib/utils';

export async function get({ params }: any) {
	const slug = params.slug;
	// let tags: string[] = [];
	const allPostFiles = import.meta.globEager('../blogs/*.{svx,md}');
	const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
		const postPath = path.slice(2, -3);
		let tagsArray = post.metadata.tags.split(',');
		tagsArray = tagsArray.map((tag: string) => tag.trim());
		return {
			...post.metadata,
			path: postPath,
			tags: tagsArray,
			published: convertDate(post.metadata.date)
		};
	});
	const matchingPosts = allPosts.filter((post) => post.tags.includes(slug));
	// tags = [...new Set(tags)];
	if (!matchingPosts.length) {
		return { status: 404 };
	}
	return { body: { matchingPosts } };
}
