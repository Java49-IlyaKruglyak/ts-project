"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = void 0;
const WageEmployee_1 = require("./WageEmployee");
const MIN_PERCENT_VALUE = 0;
const MAX_PERCENT_VALUE = 100;
class SalesPerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentValue) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentValue = _percentValue;
    }
    get salesValue() {
        return this._salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set salesValue(salesValue) {
        if (this.salesValue < MIN_PERCENT_VALUE || this.salesValue > MAX_PERCENT_VALUE)
            throw `sales value error`;
    }
    set percentValue(percentValue) {
        if (this.percentValue < MIN_PERCENT_VALUE || this.percentValue > MAX_PERCENT_VALUE)
            throw `error percent value`;
    }
    computeSalary() {
        return this.basicSalary + this._salesValue * (this._percentValue / 100) + this.hours * this.wage;
    }
}
exports.SalesPerson = SalesPerson;
//# sourceMappingURL=SalesPerson.js.map