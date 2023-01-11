"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const ShapesContainer_1 = require("./ShapesContainer");
const shapes = new ShapesContainer_1.ShapesContainer([
    new Rectangle_1.Rectangle(3, 4),
    new Square_1.Square(5),
    new ShapesContainer_1.ShapesContainer([new ShapesContainer_1.ShapesContainer([new Square_1.Square(10), new Square_1.Square(4)]),
        new Rectangle_1.Rectangle(6, 4)])
]);
const totalSquare = shapes.getSquare();
console.log(totalSquare);
// const cipherDecipher: CipherDecipher = new CipherDecipher(32, 127, 10);
// console.log(cipherDecipher.cipher("Hello World!"));
// console.log(cipherDecipher.decipher("Rovvy*ay|vn+"));
//# sourceMappingURL=app.js.map