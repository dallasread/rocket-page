var Page = require('../../../page/js'),
    CONFIG = {
        template: require('../html/index.html')
    };

var Timeline = Page.createElement(CONFIG, function Timeline(options) {
    var _ = this;

    Page.call(_, options);
});

Timeline.definePrototype({
});

module.exports = Timeline;
