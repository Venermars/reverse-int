module.exports = function reverse (n) {
    let strN = String(n);
    let result = '';
    
    strN[0] === '-' ? strN = strN.substring(1) : null

    for (i = 0; i < strN.length; i++) {
        result = strN[i] + result;
    }

    strN[0] === '0' ? strN = strN.substring(1) : null

    return result;

}
