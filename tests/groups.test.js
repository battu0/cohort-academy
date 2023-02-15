const app = require('../')
const request = require('supertest')(app)

test('create a new group', async () => {
    const groupToCreate = {
        name: 'Test Group'
    }
    const response = await request
    .post('/groups')
    .send(groupToCreate)
    .expect(200)
    
    console.log('do they match', response.body, groupToCreate)

    expect(response.body).toMatchObject(groupToCreate)
})