var Page = require('../../../page/js'),
    CONFIG = {
        template: require('../html/index.html')
    };

var Hero = Page.createElement(CONFIG, function Hero(options) {
    var _ = this;

    Page.call(_, options);

    // $el.on('click', '[data-create-vault]', function() {
    //     _.buildNewVault();
    //     return false;
    // });
});

Hero.definePrototype({
});

module.exports = Hero;
