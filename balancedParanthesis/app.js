function isValid(str) {
    let openingPar = ["{", "[", "("];
    let closingPar = ["}", "]", ")"];
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (closingPar.indexOf(str[i]) > -1) {
            let match = openingPar[closingPar.indexOf(str[i])];
            if (stack.pop() != match) {
                return false;
            }
        } else {
            stack.push(str[i]);
        }
    }

    return (stack.length == 0);

}

console.log(isValid("[()"));