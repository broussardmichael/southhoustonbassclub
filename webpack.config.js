const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    function getClientEnvironment() {
        return Object
            .keys(process.env)
            .reduce(function(env, key) {
                env['process.env.' + key] = JSON.stringify(process.env[key])
                return env
            }, {
                // whenever found in code, process.env.NODE_ENV is replaced with
                // the actual value of process.env.NODE_ENV
                // Useful for determining whether we’re running in production mode.
                // Most importantly, it switches React into the correct mode.
                'process.env.NODE_ENV': JSON.stringify(
                    process.env.NODE_ENV || 'production'
                ),
                'process.env.PUBLIC_URL': JSON.stringify(
                    process.env.PUBLIC_URL || path.resolve(__dirname, 'public')
                ),
                'process.env.SERVER_URL': JSON.stringify(
                    process.env.SERVER_URL
                )
            })
    }
    let config = {
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.gif', '.png', '.jpg', '.jpeg', '.svg'],
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            alias: {
                react: path.join(__dirname, 'node_modules', 'react'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
                {
                    test: /\.(scss)$/,
                    use: [{
                        // inject CSS to page
                        loader: 'style-loader'
                    }, {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    }, {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    }, {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: true, // webpack@2.x and newer
                            }
                        }
                    ]
                }
            ],
        },
    };
    let buildType = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
    if (/^dev/.test(buildType)) {
        buildType = 'development'
    }

    console.log(`Build Environment: ${buildType}`)

    const plugins = [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new webpack.DefinePlugin(getClientEnvironment()),
        require('autoprefixer'),
        new CopyPlugin({
            patterns: [
                { from: "public/gallery", to: "./build/gallery" }
            ],
        }),
    ];

    if(buildType === 'development') {
        config.devtool = 'source-map';
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    config.mode = buildType;
    config.plugins = plugins;

    return config
};