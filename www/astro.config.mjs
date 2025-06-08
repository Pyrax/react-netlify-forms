// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'React Netlify Forms',
			description: 'React components and hooks giving you the power of Netlify Forms',
			logo: {
				src: './src/assets/logo.png',
				alt: 'react-netlify-forms',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/pyrax/react-netlify-forms',
				},
			],
			sidebar: [
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				{ slug: 'reference' },
			],
		}),
		mdx(),
	],
	site: 'https://pyrax.github.io/react-netlify-forms',
	base: '/react-netlify-forms',
});
