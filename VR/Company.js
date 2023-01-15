"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_employees) {
        this._employees = _employees;
    }
    addEmployee(employee) {
        if (!this._employees.some(e => e.id === id))
            this._employees.push(employee);
    }
    removeEmployee(id) {
        let removed = false;
        this._employees.forEach((employee, index) => {
            if (employee.id === id) {
                this._employees.splice(index, 1);
                removed = true;
            }
        });
        return removed;
    }
    getEmployee(id) {
        const employee = this._employees.find(e => e.id === id);
        if (!employee) {
            return null;
        }
        return employee;
    }
    getEmployeeBySalary(from, to) {
        /* V.R. This code calculates the salary twicde for each of employee.
        It is more effective to do it once only
        */
        let employees = this._employees.filter(e => e.computeSalary() >= from && e.computeSalary() <= to);
        employees.sort((a, b) => a.birthYear - b.birthYear);
        return employees;
    }
    computeBudget() {
        return this._employees.reduce((acc, employee) => acc + employee.computeSalary(), 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map