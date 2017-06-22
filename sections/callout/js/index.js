var Page = require('../../../page/js'),
    CONFIG = {
        template: require('../html/index.html')
    };

var Callout = Page.createElement(CONFIG, function Callout(options) {
    var _ = this;

    Page.call(_, options);
});

Callout.definePrototype({
});

module.exports = Callout;
