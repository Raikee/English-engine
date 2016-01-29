//file for checking if a word is a coding word

var fs = require("fs");

var WordRef = (function () {
    function blank(fname) {
        fs.readFile("/TextClassifier/CodingWords.txt", "UTF-8", function(err, data) {
            if (err) throw err;
            this.file = data;
            this.words = data.split("\n");
            this.wordset = {};
            for(var i=0;i<this.words.length;i++) {
                this.wordset[this.words[i]] = true;
            }
        })
    }
    //checks if the word is in a wordset
    blank.prototype.checkword = function (word) {
        return !!(word in this.wordset);
    };
    return blank;
})();

