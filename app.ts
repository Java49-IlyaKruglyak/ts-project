function shiftCipher(str: string, shift: number = 1): string {
    let result: string = "";
    let arr: string[] = Array.from(str);
    const minCode: number = 97;
    const maxCode: number = 122;
    shift = shift % 26;

    arr.forEach((e: string) => {                                 
        let symCode: number = e.charCodeAt(0);

        if (symCode >= minCode && symCode <= maxCode) {
            symCode += shift;
            if (symCode > maxCode) {
                symCode = minCode + (symCode - maxCode) - 1;
            }
            else if (symCode < minCode) {
                symCode = maxCode - (minCode - symCode) + 1;
            }
        }
        result += String.fromCharCode(symCode)

    });
    return result;
}

console.log(shiftCipher("aaa.", 1));

//===============================================Decipher==================================================

function shiftDecipher(str: string, shift: number = 1): string {
    return shiftCipher(str, -shift);
}
console.log(shiftDecipher("bbb.", 1));