// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki()],
			title: 'Belajar PostgreSQL',
			customCss: ['./src/styles/custom.css'],
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Leetcode SQL 50',
					autogenerate: { directory: 'leetcode-sql-50' },
				}
			],
		}),
	],
});
