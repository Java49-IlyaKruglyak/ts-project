import { Employee } from "./Employee";

export class Company {

    constructor(private _employees: Array<Employee>) {

    }

    addEmployee(employee: Employee): void {
    
       if(!this._employees.some(e => e.id === id))
        this._employees.push(employee);
    }

    removeEmployee(id: number): boolean {
        let removed = false;
        this._employees.forEach((employee, index) => {
            if (employee.id === id) {
                this._employees.splice(index, 1);
                removed = true;
            }
        });
        return removed;
    }
    getEmployee(id: number): Employee | null {
       
        const employee = this._employees.find(e => e.id === id);
        if (!employee) {
            return null;
        }
        return employee;

    }
    getEmployeeBySalary(from: number, to: number): Employee[] {
        /* V.R. This code calculates the salary twicde for each of employee.
        It is more effective to do it once only
        */
        let employees = this._employees.filter(e => e.computeSalary() >= from && e.computeSalary() <= to);
        employees.sort((a, b) => a.birthYear - b.birthYear);
        return employees;
    }

    computeBudget(): number {

        return this._employees.reduce((acc, employee) => acc + employee.computeSalary(), 0);
    }
}




