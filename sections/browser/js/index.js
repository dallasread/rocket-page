var Page = require('../../../page/js'),
    CONFIG = {
        template: require('../html/index.html')
    };

var Browser = Page.createElement(CONFIG, function Browser(options) {
    var _ = this;

    Page.call(_, options);
});

Browser.definePrototype({
});

module.exports = Browser;
