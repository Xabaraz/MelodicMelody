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
    },

};
