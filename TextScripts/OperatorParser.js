/**
 * Created by Josh on 1/29/16.
 */
//file for testing scripts for retreiving operators
var add = (function () {
    function add() {
    }
    add.isadd = function (input) {
        return /add/g.test(input);
    };
    return add;
})();
var sub = (function () {
    function sub() {
    }
    //checks for the subtract word in text.
    sub.issub = function (input) {
        return /subtract/g.test(input);
    };
    return sub;
})();
//# sourceMappingURL=OperatorParser.js.map