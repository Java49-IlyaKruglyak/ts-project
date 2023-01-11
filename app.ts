import { Shape } from "./ShapeInterface";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { CipherDecipher } from "./CipherDecipher";
import { ShapesContainer } from "./ShapesContainer";
const shapes: ShapesContainer = new ShapesContainer ([
    new Rectangle(3, 4),
    new Square(5),
    new ShapesContainer([new ShapesContainer([new Square(10),new Square(4)]),
     new Rectangle(6, 4)])
]);

const totalSquare: number = shapes.getSquare();
console.log(totalSquare)
// const cipherDecipher: CipherDecipher = new CipherDecipher(32, 127, 10);

// console.log(cipherDecipher.cipher("Hello World!"));
// console.log(cipherDecipher.decipher("Rovvy*ay|vn+"));