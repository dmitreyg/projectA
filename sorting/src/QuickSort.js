function QuickSort(name) {
    var me = this;

    // Properties
    me.name = name;
};

/**
 * Get name
 */
QuickSort.prototype.getName = function () {
    var me = this;
    return me.name;
};

/**
 * Set name
 */
QuickSort.prototype.setName = function (name) {
    var me = this;
    me.name = name;
};

QuickSort.prototype.sort = function (array) {

};

QuickSort.prototype.partition = function (left, right) {

};

module.exports = QuickSort;