var Page = require('../../../page/js'),
    LETTER_FPS = 150,
    WORD_FPS = 1500,
    CONFIG = {
        template: require('../html/index.html'),
        transforms: {
            wordAt: function wordAt(word, letterIndex) {
                return (word || '').slice(0, letterIndex);
            }
        }
    };

var Speller = Page.createElement(CONFIG, function Speller(options) {
    var _ = this;

    Page.call(_, options);

    _.findWord();
});

Speller.definePrototype({
    findWord: function findWord(lastWord) {
        var _ = this,
            nextIndex = _.get('words').indexOf(lastWord || '') + 1,
            word;

        if (!lastWord) {
            word = _.get('words.0');
        } else if (nextIndex >= _.get('words.length')) {
            word = _.get('words.0');
        } else {
            word = _.get('words.' + nextIndex);
        }

        _.spell(word, 1);
    },

    spell: function spell(word, index, isDescending) {
        var _ = this;

        if (isDescending) {
            if (index === -1) {
                setTimeout(function() {
                    _.findWord(word);
                }, _.get('letterFPS') || LETTER_FPS);
            } else {
                _.set('word', word.slice(0, index));

                setTimeout(function() {
                    _.spell(word, index - 1, true);
                }, _.get('letterFPS') || LETTER_FPS);
            }
        } else {
            if (index <= word.length) {
                _.set('word', word.slice(0, index));

                setTimeout(function() {
                    _.spell(word, index + 1);
                }, _.get('letterFPS') || LETTER_FPS);
            } else {
                setTimeout(function() {
                    _.spell(word, index - 1, true);
                }, _.get('wordFPS') || WORD_FPS);
            }
        }
    },
});

module.exports = Speller;
