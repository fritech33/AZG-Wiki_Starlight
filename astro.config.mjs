import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import starlightThemeNova from 'starlight-theme-nova'
import starlightThemeExquisitus from 'starlight-theme-exquisitus';


// https://astro.build/config
export default defineConfig({
    site: 'https://fritech33.github.io',
    base: '/AZG-Starlight',
  	integrations: [
		starlight({
			title: 'AZG-Wiki',
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
