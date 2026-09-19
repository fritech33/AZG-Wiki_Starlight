import tailwindcss from "@tailwindcss/vite";

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

//import starlightThemeNova from 'starlight-theme-nova'
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};

// https://astro.build/config
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
 		    //defaultLocale: 'de',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
			    //starlightThemeNova(), 
			    starlightThemeExquisitus(),
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
