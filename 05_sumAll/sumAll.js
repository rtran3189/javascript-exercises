const sumAll = function(firstNum, secondNum) {
    
    // if either of the args aren't numbers, return error
    if (isNaN(firstNum) || isNaN(secondNum))
    return "ERROR";
    
    // if either of the args are negative, return error
    if ((firstNum < 0) || (secondNum < 0))
    return "ERROR";
    
    // if either of the args are strings, return error
    if (typeof(firstNum) === 'string' || typeof(secondNum) === 'string')
        return "ERROR";
    
    // if first number is larger, swap them!
    if (firstNum > secondNum) {
        dummy = firstNum;
        firstNum = secondNum;
        secondNum = dummy;
    }

    sum = 0;
    for (i = firstNum; i <= secondNum; i++) {
        // console.log("adding: " + sum + " + " + firstNum);
        sum = sum + firstNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
