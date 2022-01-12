const app = require('../index')
const request = require('supertest')

describe('register user', () => {
    it('registration user success /user/register', async () => {
        const res = await request(app)
            .post('/api/user/register')
            .send({
                username:'kent',
                email: 'kent@gmail.ua',
                password: '1234',
                isadmin: false
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
    })
    it('registration user unsuccessful /user/register', async () => {
        const res = await request(app)
            .post('/api/user/register')
            .send({
                username:'',
                email: 'kent@gmail.ua',
                password: '1234',
                isadmin: false
            })
        expect(res.statusCode).toEqual(400)
    })
})

describe('login user testing', () => {
    it('login user success /user/login', async () => {
        const res = await request(app)
            .post('/api/user/login')
            .send({
                email: 'dimonvkedax@gmail.com',
                password: '1111'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
        expect(res.body.user).toBeInstanceOf(Object)
    })

    it('dont have user /user/login', async () => {
        const res = await request(app)
            .post('/api/user/login')
            .send({
                email: 'kum@gmail.com',
                password: '1234'
            })
        expect(res.statusCode).toEqual(400)
        expect(res.body.message).toBe('User not exist')
    })

    it('invalid password /user/login', async () => {
        const res = await request(app)
            .post('/api/user/login')
            .send({
                email: 'dimonvkedax@gmail.com',
                password: '1234'
            })
        expect(res.statusCode).toEqual(400)
        expect(res.body.message).toBe('Password is incorrect')
    })
})