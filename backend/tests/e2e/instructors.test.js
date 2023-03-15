const app = require('../..')
const request = require('supertest')(app)

describe('get to see', () => {
    test('a instructor', async () => {
        await request
        .get('/instructors')
        .expect(200)
    });

    test('instructors', async () => {
        const instructorToCreated = {
            name: 'foo',
        }

        const response = await request
        .post('/instructors')
        .send(instructorToCreated)
        .expect(200)

        await request
        .get(`/instructors/${response.body._id}`)
        .expect(200)
    })
})

describe('create and delete a instructor', () => {
    test('create a instructor', async () => {
        const instructorToCreated = {
            name: 'foo',
        }
        const response = await request
        .post('/instructors')
        .send(instructorToCreated)
        .expect(200)
    });
    
    test('delete a instructor', async () => {
        const instructorToCreated = {
            name: 'foo',
        }
    
        const response = await request
        .post('/instructors')
        .send(instructorToCreated)
        .expect(200)
        
        await request
        .delete(`/instructors/${response.body._id}`)
        .expect(200)
    })
})

