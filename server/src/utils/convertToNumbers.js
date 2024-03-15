function convertToNumbers(stringArray) {
    return stringArray.map(function (string) {
        return parseInt(string);
    });
};

module.exports = convertToNumbers;