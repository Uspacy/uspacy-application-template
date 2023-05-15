const deps = require('./package.json').dependencies;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';
const appName = 'YOUR_APP_NAME';

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: NODE_ENV,
	devServer: {
		hot: true,
		open: true,
		port: 8080,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: appName,
			filename: 'remoteEntry.js',
			exposes: {
				'./app': './src/components/App',
				'./settings': './src/components/Settings',
			},
			shared: deps,
		}),
		...(isDev
			? [
					new HtmlWebpackPlugin({
						template: './public/index.html',
						excludeChunks: [appName],
					}),
					new ESLintPlugin({
						files: ['./src'],
						extensions: ['tsx', 'ts', 'jsx', 'js'],
						errorOnUnmatchedPattern: false,
						overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
					}),
			  ]
			: []),
	],
};
