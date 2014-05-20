var Alloy = require('alloy'), _ = require("alloy/underscore")._, Backbone = require("alloy/backbone");

var utils = (function() {
    var methods = {};
    
    methods.constructTweet = function (args) {
        var string = "Tried this beer called " + args.name + ",";
        if (args.brewery) {
            string = " by " + args.brewery;
        }
        if (args.establishment) {
            string = " at " + args.establishment; 
        }
    };
    
    methods.parseDateStringFromEpoch= function(date_epoch) {
        var date = new Date(parseInt(date_epoch, 10));  
        var thisYear = new Date().getFullYear();
        var date_string = date.toDateString();
        if (date.getFullYear() === thisYear) date_string = date_string.substring(0, date_string.length - 5); // trim year off end if current year
        return date_string;
    };
    
    return methods;
})();


module.exports = utils;