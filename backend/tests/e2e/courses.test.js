const app = require('../..')
const request = require('supertest')(app)

describe('get to see', () => {
    test('a course', async () => {
        await request
        .get('/courses')
        .expect(200)
    });

    test('courses', async () => {
        const courseToCreated = {
            name: 'foo',
            subject: 'bar'
        }

        const response = await request
        .post('/courses')
        .send(courseToCreated)
        .expect(200)

        await request
        .get(`/courses/${response.body._id}`)
        .expect(200)
    })
})

describe('create and delete a course', () => {
    test('create a course', async () => {
        const courseToCreated = {
            name: 'foo',
            subject: 'bar'
        }
        const response = await request
        .post('/courses')
        .send(courseToCreated)
        .expect(200)
    });
    
    test('delete a course', async () => {
        const courseToCreated = {
            name: 'foo',
            subject: 'bar'
        }
    
        const response = await request
        .post('/courses')
        .send(courseToCreated)
        .expect(200)
        
        await request
        .delete(`/courses/${response.body._id}`)
        .expect(200)
    })
})

