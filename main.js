function multiply(left, right) {
    return createMultiplyTable(left, right);
}

module.exports = multiply;

function createMultiplyTable(left, right) {
    if (validRange(left, right)) {
        if (lessThanRight(left, right)) {
            return alignResult(left, right);
        }
    }
    return false;
}

function validRange(left, right) {
    return left > 1 && right <= 1000;
}

function lessThanRight(left, right) {
    return left < right;
}

function alignResult(left, right) {
    var result = [];
    var addtnlStr = '';
    var prodNum;
    var output = '';
    var current = left;

    for (var i = left; i <= right; i++) {
        for (var j = i; j <= right; j++) {
            prodNum = i * j;
            addtnlStr = i + '*' + j + '=' + prodNum;
            result.push({product: addtnlStr, multiplicand: j});
        }
    }

    for (var x = 0; x <= right - left; x++) {        
        var filterResult = result.filter(results => results.multiplicand == current);
        for (var y = 0; y < filterResult.length; y++) {
            output += filterResult[y].product;
            if (y + 1 == filterResult.length) {
                output += '\n';
            } else {
                output += ' ';
            }
        }
        current++;
    }

    return output;
}