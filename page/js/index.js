function style(obj) {
    var str = '';

    for (var key in obj) {
        str += key + ': ' + obj[key] + '; ';
    }

    return str;
}

var CustomElement = require('generate-js-custom-element'),
    CONFIG = {
        template: require('../html/index.html'),
        partials: {
            form: require('../html/form.html'),
            img: require('../html/img.html'),
            video: require('../html/video.html')
        }
    };

var Page = CustomElement.createElement(CONFIG, function Page(options) {
    var _ = this;

    options.section = _;

    CustomElement.call(_, { data: options });

    _.element.onkeyup = function(event) {
        var parent = event.target.parentElement;

        if (parent.className.indexOf('field') !== -1) {
            parent.data('field').value = event.target.value;
            _.update();
        }
    };

    _.element.onsubmit = function(event) {
        event.stopImmediatePropagation();
        event.preventDefault();

        var section = event.target.data('section'),
            submit = event.target.data('submit');

        submit.call(section);

        return;
    };

    if (options.sections) {
        for (var i = 0; i < options.sections.length; i++) {
            _.element.appendChild(options.sections[i].element);
        }
    }

    _.element.className = 'section ' + _.constructor.name.toLowerCase() + ' ' + (_.get('class') || '');
    _.element.style = style(_.get('style'));

    if (options.target) {
        _.append(options.target);
    }
});

Page.definePrototype({
    append: function append(target) {
        var _ = this;

        while (target.hasChildNodes()) {
            target.removeChild(target.lastChild);
        }

        target.appendChild(_.element);
    }
});

module.exports = Page;
