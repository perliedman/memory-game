var Class = require('./class'),
    _ = require('lodash'),
    $ = require('jquery-browserify');

module.exports = Class.extend({
    initialize: function(div, cols, rows, pics) {
        var cpics = _(pics)
            .map(function(p) { return [p, p]; })
            .flatten()
            .shuffle()
            .value(),
            c = 0,
            w = (128 + 16) * cols,
            h = (128 + 16) * rows,
            row,
            col,
            card;
        if (cpics.length < cols * rows) {
            throw 'Not enough pics';
        }

        div = _.isString(div) ? $('#' + div) : div;

        div.attr('style', 'width:' + w + ';height:' + h + ';');

        for (row = 0; row < rows; row++) {
            for (col = 0; col < cols; col++) {
                card = $('<div class="card">' +
                    '<div class="flipper">' +
                    '<div class="front"></div>' +
                    '<div class="back" style="background-image:url(' + cpics[c++] +
                    ');"></div></div></div>');
                div.append(card);
            }
        }
    }
});
