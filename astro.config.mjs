// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightThemeExquisitus from 'starlight-theme-exquisitus';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://fritech33.github.io',
    base: '/AZG-Wiki_Starlight',
  	integrations: [
		starlight({
			title: 'AZG-Wiki',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			social: [
				{
					icon: 'email',
					label: 'Feedback',
					href: 'mailto:simon.lauber@gmx.ch'
				}
			],
			sidebar: [
				{
					label: 'Übersicht',
					items: [
						{ label: 'Startseite', slug: 'index' },
					],
				},
				{
					label: 'AZG-Regelungen',
					items: [{ autogenerate: { directory: 'details' } }],
				},
			],
			lastUpdated: true,
			customCss: [
				'./src/styles/global.css',
			],
			plugins: [
			    starlightThemeExquisitus(),
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
