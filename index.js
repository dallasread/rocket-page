var Rocket = {
    Page: require('./page/js'),
    Sections: {
        Callout:   require('./sections/callout/js'),
        Copyright: require('./sections/copyright/js'),
        Hero:      require('./sections/hero/js'),
        Browser:   require('./sections/browser/js'),
        Speller:   require('./sections/speller/js'),
        Timeline:  require('./sections/timeline/js')
    }
};

window.Rocket = Rocket;

module.exports = Rocket;
