require('dotenv').config();
const deps = require('./package.json').dependencies;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';
const appName = 'UspacyBirthdayWidget';

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'static/js/[name].[contenthash:8].js',
		chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: NODE_ENV,
	devServer: {
		hot: true,
		open: true,
		port: 8080,
		proxy: {
			'/': {
				target: process.env.PROXY_PORTAL_URL,
				secure: false,
				changeOrigin: true,
				bypass: function (req) {
					if (req.url.startsWith('/static')) {
						return req.url;
					}
				},
			},
		},
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
			shared: {
				...deps,
				react: {
					requiredVersion: deps.react,
					singleton: true,
				},
				'react-dom': {
					requiredVersion: deps['react-dom'],
					singleton: true,
				},
				'@mui/material': {
					requiredVersion: deps['@mui/material'],
					singleton: true,
				},
				'@emotion/react': {
					requiredVersion: deps['@emotion/react'],
					singleton: true,
				},
				'@emotion/styled': {
					requiredVersion: deps['@emotion/styled'],
					singleton: true,
				},
				'@uspacy/store': {
					requiredVersion: deps['@uspacy/store'],
					singleton: true,
				},
				'@uspacy/sdk': {
					requiredVersion: deps['@uspacy/sdk'],
					singleton: true,
				},
				'@reduxjs/toolkit': {
					requiredVersion: deps['@reduxjs/toolkit'],
					singleton: true,
				},
				'react-redux': {
					requiredVersion: deps['react-redux'],
					singleton: true,
				},
			},
		}),
		new Dotenv(),
		...(isDev
			? [
					new HtmlWebpackPlugin({
						template: './public/index.html',
						excludeChunks: [appName],
					}),
					new ESLintPlugin({
						files: ['./src'],
						extensions: ['tsx', 'ts', 'jsx', 'js'],
						overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
					}),
			  ]
			: []),
	],
};
