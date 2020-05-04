const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@icons": path.resolve(__dirname, 'src/icons'),
                "@images": path.resolve(__dirname, 'src/images'),
                "@tracks": path.resolve(__dirname, 'src/tracks'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }

};
