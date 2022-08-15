const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

// checks all the arguments were assigned to the employee object
test('creates an employee object', () => {
    const employee = new Employee('John', 1, 'johndoe@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('johndoe@gmail.com');
});

// gets the name of the employee
test('returns the employee\'s name value', () => {
    const employee = new Employee('John');

    expect(employee.getName()).toBe('John');
});

// gets the id of the employee
test("returns the employee's id", () => {
    const employee = new Employee('John', 1);

    expect(employee.getId()).toBe(1);
});

// gets the email of the employee
test("returns the employee's email", () => {
    const employee = new Employee('John', 1, 'johndoe@gmail.com');

    expect(employee.getEmail()).toBe('johndoe@gmail.com');
});

// get's the role of the employee
test("returns the employee's role", () => {
    const employee = new Employee('John', 1, 'johndoe@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});