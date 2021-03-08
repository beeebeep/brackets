module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketsPairs = {};
    for (var j = 0; j < bracketsConfig.length; j++) {
        bracketsPairs[bracketsConfig[j][0]] = bracketsConfig[j][1];
    }

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === bracketsPairs[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(str.charAt(i));
        }
    }
    return stack.length === 0;
};
