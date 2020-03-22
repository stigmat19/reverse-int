module.exports = function reverse (n) {
    let abs = Math.abs(n);
    let numberToStr = abs.toString().split('');
    numberToStr.reverse();
    let res = numberToStr.join('');
    return res;

};
