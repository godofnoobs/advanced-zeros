module.exports = function getZerosCount(number, base) {

    var n = number,
            b = base;
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
        61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127];
    var count = 0,
            t;

    var largestPrimeDivisor = base;
    for (var i = primes.length - 1; i >= 0; i--) {
        if (b % primes[i] == 0) {
            largestPrimeDivisor = primes[i];
            break;
        }
    }

    do {
        t = Math.floor(n / largestPrimeDivisor);
        count += t;
        n = t;
    } while (n > 0);

    return count;
}