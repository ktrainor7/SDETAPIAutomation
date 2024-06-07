const axios = require('axios');

test('Change email for user 1', async() => {
    const user = {
        email: "testname@example.com"
    };
    const response = await axios.put('https://jsonplaceholder.typicode.com/users/1', user);
    expect(response.status).toBe(200);
    expect(response.data.email).toBe('testname@example.com');
    expect(response.data.id).toBe(1);
})