const axios = require('axios');

test('User with 1 ID exists', async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status).toBe(200);
});

test('User ID 1 has name "Leanne Graham"', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.data.name).toBe('Leanne Graham');
});

test('User email is valid', async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.data.email).toMatch(/\S+@\S+\.\S+/);
});

test('Get albums from user 1', async () => {
    const user1 = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${user1.data.id}`);
    expect(albums.data[0].userId).toBe(1);
})

test('Endpoint does not exist and returns 404', async () => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/junk');
    } catch (error) {
        expect(error.response.status).toBe(404);
    }
})