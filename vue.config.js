const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@icons": path.resolve(__dirname, 'src/icons'),
                "@image": path.resolve(__dirname, 'src/images'),
            }
        }
    }
};
