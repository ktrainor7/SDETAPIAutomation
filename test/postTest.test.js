const axios = require('axios');

test('Create a new user using POST request', async () => {
    const user = {
        name: "Test Name",
        username: "username",
        email: "testname@example.com"
    };
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    expect(response.status).toBe(201);
    expect(response.data.name).toBe('Test Name');
    expect(response.data.username).toBe('username');
    expect(response.data.email).toBe('testname@example.com');
    expect(response.data.id).toBe(11);
})

test('Create a user with no email', async () => {
    const user = {
        name: "Test Name",
        username: "username"
    };
    try {
        await axios.post('https://jsonplaceholder.typicode.com/users', user);
    } catch (error) {
        expect(error.response.status).toBe(400);
    }
})