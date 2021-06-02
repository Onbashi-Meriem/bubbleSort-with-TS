"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // constructor(public collection: Sortable) {
    //     // this.collection = collection;
    // }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                /* //if collection is a string, do this logic instead
                // logic to compare and swap characters a string
                if (typeof (this.collection) == 'string') {

                }
 */
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
