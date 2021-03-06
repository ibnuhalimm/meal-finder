const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        nav: './src/js/nav.js',
        index: {
            import: './src/js/pages/index.js',
            filename: 'js/pages/[name].js'
        },
        category: {
            import: './src/js/pages/category.js',
            filename: 'js/pages/[name].js'
        },
        about: {
            import: './src/js/pages/about.js',
            filename: 'js/pages/[name].js'
        }
    },
    mode: process.env.NODE_ENV,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env' ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
            chunks: [ 'nav', 'index' ]
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'category.html',
            chunks: [ 'nav', 'category' ]
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'about.html',
            chunks: [ 'nav', 'about' ]
        })
    ]
};