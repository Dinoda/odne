import 'dotenv/config';

import './src/rendering/index.js';

import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild.build({
	entryPoints: ['./src/app/app.js'],
	bundle: true,
	outfile: './public/app.js',
	plugins: [sassPlugin()],
	external: [
		'/img/*',
	],
});


