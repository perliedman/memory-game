var _ = require('lodash'),
    Playfield = require('./playfield'),
    pf = new Playfield('playfield', 4, 4, [
        'images/arvid1.jpg',
        'images/irma1.jpg',
        'images/star.jpg',
        'images/asa1.jpg',
        'images/stina1.jpg',
        'images/smilla1.jpg',
        'images/tjejen1.jpg',
        'images/per1.jpg'
    ]),
    openCards = [],
    foundCards = [];

pf.cardClicked = function(i) {
    var j;

    if (openCards.length < 2 && _.indexOf(openCards, i) >= 0) {
        return;
    }

    if (_.indexOf(foundCards, i) >= 0) {
        return;
    }

    if (openCards.length >= 2) {
        if (pf.isSame(openCards[0], openCards[1])) {
            for (j = 0; j < openCards.length; j++) {
                foundCards.push(openCards[j]);
            }
        } else {
            for (j = 0; j < openCards.length; j++) {
                pf.hideCard(openCards[j]);
            }
        }
        openCards = [];
    }

    pf.showCard(i);
    openCards.push(i);
};