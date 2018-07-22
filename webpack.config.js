const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: {
		app: [
			'./js/index.js',
			'./sass/main.sass'
		]
		
	},
	
	output: {
		filename: './js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '../'
	},

	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					use:[
						{
							loader: 'css-loader',
							options: {sourceMap: true}
						},
 						{
							loader: 'postcss-loader',
							options: {sourceMap: true }
						}, 
						{
							loader: 'sass-loader',
							options: {sourceMap: true}
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(png|gif|jpe?g)$/,
				loaders: [
					{
						loader: 'file-loader',
						options: {
					  name: '[path][name].[ext]',
						},
					},
					'img-loader',
				]
			},
			{
				test: /\.(woff|wof2|eat|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: '[path][name].[ext]',
					},
				]
				
			},

			//svg convector
			{
				test: /\.svg$/,
				loader: 'svg-url-loader',
			} 
		]
	},

	plugins: [
		new ExtractTextPlugin('./css/[name].css'),
//		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin(
			[{ from: './img' , to: 'img'}],
			{ignore: [{glob: 'svg/*'}]}
		),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development,
			// ./public directory is being served
			host: 'localhost',
			port: 3000,
			watch: true,
			server: { 
				baseDir: ["./dist"] 
			}
		  })
	],
};