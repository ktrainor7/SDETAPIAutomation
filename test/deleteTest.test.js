const axios = require('axios');

test('Delete user from database', async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status).toBe(200);
    expect(response.data).toStrictEqual({});
})