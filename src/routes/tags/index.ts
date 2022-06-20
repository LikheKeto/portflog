export async function get() {
	let tags: string[] = [];
	const allPostFiles = import.meta.globEager('../blogs/*.{svx,md}');
	Object.entries(allPostFiles).map(([path, post]) => {
		const postPath = path.slice(2, -3);
		let tagsArray = post.metadata.tags.split(',');
		tagsArray = tagsArray.map((tag: string) => tag.trim());

		tags = [...tags, ...tagsArray];
		return { ...post.metadata, path: postPath };
	});
	tags = [...new Set(tags)];
	if (!tags.length) {
		return { status: 404 };
	}
	return { body: { tags } };
}
