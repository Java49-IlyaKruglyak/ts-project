"use strict";
function shiftCipher(str, shift = 1) {
    let result = "";
    let arr = Array.from(str);
    const minCode = 97;
    const maxCode = 122;
    shift = shift % 26;
    arr.forEach(e => {
        let symCode = e.charCodeAt(0);
        if (symCode >= minCode && symCode <= maxCode) {
            symCode += shift;
            if (symCode > maxCode) {
                symCode = minCode + (symCode - maxCode) - 1;
            }
            else if (symCode < minCode) {
                symCode = maxCode + (minCode - symCode) + 1;
            }
        }
        result += String.fromCharCode(symCode);
    });
    return result;
}
console.log(shiftCipher("zzz.", 1));
//===============================================Decipher==================================================
function shiftDecipher(str, shift = 1) {
    return shiftCipher(str, -shift);
}
console.log(shiftDecipher("aaa.", 1));
//# sourceMappingURL=app.js.map