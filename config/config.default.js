exports.keys = '123';

exports.logger = {
    level: 'DEBUG',
};

const path = require('path');
module.exports = appInfo => {
    const config = {};

    config.view = {
        root: [
            path.join(appInfo.baseDir, 'app/view'),
        ].join(','),
        mapping: {
            '.html': 'nunjucks'
        },
    };

    config.keys = appInfo.name + '123';

    return config;
};