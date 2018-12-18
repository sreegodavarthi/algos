// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const res = fn.apply(this, args);
        cache[args] = res;
        return res;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


module.exports = fib;

// function fib(n) {
//     let res = [0, 1];
//     for (i = 2; i <= n; i++) {
//         let a = res[i - 1];
//         let b = res[i - 2];
//         res.push(a + b);
//     }
//     return res[n];
// }