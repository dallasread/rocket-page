var Page = require('../../../page/js'),
    CONFIG = {
        template: require('../html/index.html')
    };

var Copyright = Page.createElement(CONFIG, function Copyright(options) {
    var _ = this;

    Page.call(_, options);
});

Copyright.definePrototype({
});

module.exports = Copyright;
