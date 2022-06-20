import { defineMDSveXConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import relativeImages from 'mdsvex-relative-images';
import * as path from 'path';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineMDSveXConfig({
	extensions: ['.md', '.svx'],
	smartypants: { dashes: 'oldschool' },
	layout: { blog: path.join(dirname, './src/routes/blogs/_layout.svelte') },
	remarkPlugins: [relativeImages]
});

export default config;
