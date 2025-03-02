// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	// Add your production domain here
	site: "https://rahuldogra.dev",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		icon(),
	],
});
