const { inflateRaw } = require('zlib');
const Intern = require('../lib/Intern');

test("returns the intern's name", () => {
    const intern = new Intern('jason', 4, 'jasondoe@gmail.com', 'miami beach');

    expect(intern.getName()).toBe('jason');
    expect(intern.name).toBe('jason');
});

test("returns the intern's id", () => {
    const intern = new Intern('jason', 4, 'jasondoe@gmail.com', 'miami beach');

    expect(intern.getId()).toBe(4);
    expect(intern.id).toBe(4);
});

test("returns the intern's email", () => {
    const intern = new Intern('jason', 4, 'jasondoe@gmail.com', 'miami beach');

    expect(intern.getEmail()).toBe('jasondoe@gmail.com');
    expect(intern.email).toBe('jasondoe@gmail.com');
});


test("creates school value and checks the returns of the intern's school", () => {

    const intern = new Intern('jason', 4, 'jasondoe@gmail.com', 'miami beach');

    expect(intern.getSchool()).toBe("miami beach");
    expect(intern.school).toBe('miami beach');
});

test("returns intern's role", () => {
    const intern = new Intern('jason', 4, 'jasondoe@gmail.com', 'miami beach');

    expect(intern.getRole()).toBe("Intern")
});