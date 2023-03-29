const reverseString = function(str) {
    stringLength = str.length;
    reversedString = "";
    for (i=stringLength-1; i >= 0; i--) {
        reversedString = reversedString.concat(str.charAt(i));
    }
    console.log("String: " + str);
    console.log("Reversed String: " + reversedString);
    return reversedString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
