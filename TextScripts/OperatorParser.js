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
//# sourceMappingURL=OperatorParser.js.map