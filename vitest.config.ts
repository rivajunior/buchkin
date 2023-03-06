import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solidPlugin()],
	test: {
		globals: true, // Required by testing-library ro run auto DOM cleanup.
		deps: {
			registerNodeLoader: true,
			inline: [/solid-js/],
		},
		environment: 'jsdom',
		transformMode: {
			web: [/.[jt]sx?/],
		},
	},
});
