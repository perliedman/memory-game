var Class = require('./class'),
    _ = require('lodash'),
    $ = require('jquery-browserify');

module.exports = Class.extend({
    initialize: function(div, cols, rows, pics) {
        var w = (128 + 16) * cols,
            h = (128 + 16) * rows,
            _this = this,
            card;
        if (pics.length * 2 < cols * rows) {
            throw 'Not enough pics';
        }

        div = _.isString(div) ? $('#' + div) : div;
        div.attr('style', 'width:' + w + ';height:' + h + ';');

        this._cards = [];
        this._cpics = _(pics)
            .map(function(p) { return [p, p]; })
            .flatten()
            .shuffle()
            .value();

        _.forEach(this._cpics, function(p, i) {
            card = $('<div class="card" data-card="' + i + '">' +
                '<div class="flipper">' +
                '<div class="front"></div>' +
                '<div class="back" style="background-image:url(' + p +
                ');"></div></div></div>');

            card.click(function() {
                _this.cardClicked(i);
            });
            _this._cards.push(card);
            div.append(card);
        });
    },

    cardClicked: function() {

    },

    showCard: function(i) {
        this._cards[i].addClass('flip');
    },

    hideCard: function(i) {
        this._cards[i].removeClass('flip');
    },

    isSame: function(i, j) {
        return this._cpics[i] === this._cpics[j];
    }
});
