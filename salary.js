//Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
//Include a method to calculate annual salary.
//Create a subclass called 'Manager'that inherits from the 'Employee'class and adds an additional property for department.
//Override the annual salary calculation method to include bonuses for managers.Create two instances of the 'Manager'class and calculate their annual salary.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12; //multiply the monthly salary by 12
    }
}

class Manager extends Employee { //add an additional property for each department
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = 0.1 * baseSalary; // 10% bonus for managers
        return baseSalary + bonus;
    }
}

// Creating instances of Manager class
const manager1 = new Manager('Mary Jane', 70000, 'Marketing');
const manager2 = new Manager('Ryan Gosling', 100000, 'Manufacturing');

// Calculating annual salary for managers
const manager1AnnualSalary = manager1.calculateAnnualSalary();
const manager2AnnualSalary = manager2.calculateAnnualSalary();

// Printing the annual salaries
console.log(`Annual salary for ${manager1.name} is $${manager1AnnualSalary} who is in the ${manager1.department} department`);
console.log(`Annual salary for ${manager2.name} is $${manager2AnnualSalary} who is in the ${manager2.department} department`);

//Output:
//Annual salary for Mary Jane is $924000 who is in the Marketing department
//Annual salary for Ryan Gosling is $1320000 who is in the Manufacturing department