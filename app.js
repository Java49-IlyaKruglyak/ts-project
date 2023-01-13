"use strict";
// import { Shape } from "./ShapeInterface";
// import { Rectangle } from "./Rectangle";
// import { Square } from "./Square";
// import { CipherDecipher } from "./CipherDecipher";
// import { ShapesContainer } from "./ShapesContainer";
// const shapes: ShapesContainer = new ShapesContainer ([
//     new Rectangle(3, 4),
//     new Square(5),
//     new ShapesContainer([new ShapesContainer([new Square(10),new Square(4)]),
//      new Rectangle(6, 4)])
// ]);
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
const SalesPerson_1 = require("./SalesPerson");
const WageEmployee_1 = require("./WageEmployee");
// const totalSquare: number = shapes.getSquare();
// console.log(totalSquare)
// // const cipherDecipher: CipherDecipher = new CipherDecipher(32, 127, 10);
// // console.log(cipherDecipher.cipher("Hello World!"));
// // console.log(cipherDecipher.decipher("Rovvy*ay|vn+"));
const employee = new WageEmployee_1.WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 50);
console.log(employee.id);
employee.basicSalary = 49000;
const salesPerson = new SalesPerson_1.SalesPerson(222, "ilya", 1988, "Dev", 5000, 87, 187, 20, 20);
console.log(salesPerson.name);
console.log("ilya salary " + salesPerson.computeSalary());
const company = new Company_1.Company([]);
company.addEmployee(salesPerson);
company.addEmployee(employee);
console.log("vasya salary " + employee.computeSalary());
console.log("budget " + company.computeBudget());
//# sourceMappingURL=app.js.map