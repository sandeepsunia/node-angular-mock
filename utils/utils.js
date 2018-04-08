/**
 * Created by omri on 8/20/14.
 */
'use strict';

module.exports.generateHash = function () {
    var text = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 8; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

// Math.random produces random decimals from [0..1) [inclusive, exclusive)
// This function produces an integer at random in the range [min..max] (inclusive, inclusive)
module.exports.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.getRandomIntAsString = function (min, max) {
    var int = module.exports.getRandomInt(min,max);
    return int < 10 ? "0" + int : int.toString();
};
