module.exports = function getZerosCount(number, b) {
    var n = number;
    var base = b;
    var count = {};
    var res = [];


    var divisors = [];
    for (var i = 2; i <= b; i++)
        while (!(b % i)) {
            divisors.push(i);
            b /= i;
        }
    divisors.sort(function(a, b) {return a-b});
    for (var i in divisors)
        count[divisors[i]] = 0;
    for (var i in divisors)
        count[divisors[i]] ++;
    for (var i in count)
        res.push(Math.floor(getZ(number, i)/count[i]));
    return res.reduce((a, b) => ((a > b) ? b:a));
}

function getZ(number, div) {
    var n = number,
        count = 0,
        t;
    do {
        t = Math.floor(n/div);
        count += t;
        n = t;
    }
    while (n>1);

    return count;
}


//alert(getZerosCount(4821527, 250));