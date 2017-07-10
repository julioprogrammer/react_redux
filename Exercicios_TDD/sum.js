module.exports = function sum(number1, number2) {
    return verifyIsNumber(number1 + number2);
}

function verifyIsNumber(result) {
    return typeof result === 'string' ? 'ERROR: Type of parameter is String' : result;
}