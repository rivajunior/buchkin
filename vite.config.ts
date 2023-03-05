import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import gzipPlugin from 'rollup-plugin-gzip';
import { brotliCompress } from 'node:zlib';
import { promisify } from 'node:util';

const brotliPromise = promisify(brotliCompress);

export default defineConfig({
	plugins: [
		solidPlugin(),
		{
			...gzipPlugin({
				customCompression: async (content) =>
					brotliPromise(Buffer.from(content)),
				fileName: '.br',
			}),
			enforce: 'post',
			apply: 'build',
		},
	],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
