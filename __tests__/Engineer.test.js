const Engineer = require('../lib/Engineer');

// getGithub and github
test('returns the github username and checks github', () => {
    const engineer = new Engineer('jane', 3, 'janedoe@gmail.com', 'jane003');

    expect(engineer.getGithub()).toEqual('jane003');
    expect(engineer.github).toBe('jane003');
});

// getName() and name
test("returns the engineer's name and checks name", () => {
    const engineer = new Engineer('jane', 3, 'janedoe@gmail.com', 'jane003');

    expect(engineer.getName()).toBe('jane');
    expect(engineer.name).toBe('jane');
});

// getId() and id
test("returns the engineer's id and checks id", () => {
    const engineer = new Engineer('jane', 3, 'janedoe@gmail.com', 'jane003');

    expect(engineer.getId()).toBe(3);
    expect(engineer.id).toBe(3);
});

// getEmail() and email
test("returns the engineer's email and checks email", () => {
    const engineer = new Engineer('jane', 3, 'janedoe@gmail.com', 'jane003');

    expect(engineer.getEmail()).toEqual('janedoe@gmail.com');
    expect(engineer.email).toBe('janedoe@gmail.com');
});

// getRole()
test("displays the engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});