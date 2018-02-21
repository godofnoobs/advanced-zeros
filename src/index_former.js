module.exports = function getZerosCount(number) {
    var n = number,
        count = 0,
        t;
    do {
        t = Math.floor(n/5);
        count += t;
        n = t;
    } while (n>1);
    
    return count;
}