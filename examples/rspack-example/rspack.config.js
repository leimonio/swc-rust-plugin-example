// @ts-check

/** @type {import('@rspack/cli').Configuration} */
const config = {
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'builtin:swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'ecmascript',
                            },
                            experimental: {
                                plugins: [
                                    [
                                        'swc-plugin-transformer', // need to use specific version to be compatible with rspack's internal swc version
                                        {
                                            exclude: ['error'],
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                },
                type: 'javascript/auto',
            }
        ],
    },
    optimization: {
        minimize: false,
    },
};

module.exports = config;