const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        overlay: true,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: path.resolve(__dirname, 'src'), } }
                    }
                ],
            },
            {
                test: /\.sass$/,
                use: [

                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: path.resolve(__dirname, 'src'), } }
                    },
                    "sass-loader" 
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'svg-sprite/icons.svg',
                }
            },
        ]
    },
    plugins: [
        new SpriteLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/img'),
            to: path.resolve(__dirname, 'dist/img'),
        }]),
        new ImageminPlugin({
            pngquant: ({ quality: [0.9, 0.9] }),
            plugins: [imageminMozjpeg({ quality: 90 })]
        })
        //new HtmlWebpackPlugin(),
    ]

};

module.exports = function (env, arvg) {
    return conf;
}