var _ = require('lodash');

function extend(base, members) {
    var c = (function() {
        this.initialize.apply(this, arguments);
    });

    _.extend(c.prototype, base.prototype);
    _.extend(c.prototype, members);
    c.extend = function(members) {
        return extend(c, members);
    };

    return c;
}

module.exports = extend({}, {});
