const app = require('../index')
const request = require('supertest')

describe("Get list users /users", () => {
    it('get user success',  async () => {
        const res = await request(app)
            .get(`/admin/users`)
            .set('Accept', 'application/json')
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
        expect(res.body.data).toBeInstanceOf(Array)
    });

})

describe('Get list user by id /users/:id', () => {
    it('Get list user by id success',  async () => {
        const res = await request(app)
            .get(`/admin/user/9`)
            .set('Accept', 'application/json')
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
        expect(res.body.data.user).toBeInstanceOf(Array)
    });
    it('Get list user by id error',  async () => {
        const res = await request(app)
            .get(`/admin/user/67`)
            .set('Accept', 'application/json')
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(404)
        expect(res.body.success).toBeFalsy()
    });

})

describe('Get dashboard /dashboard', () => {
    it('should get status 200',  async () => {
        const res = await request(app)
            .get(`/admin/dashboard`)
            .set('Accept', 'application/json')
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
        expect(res.body.data).toBeInstanceOf(Array)
    });
})

describe('updateUser /user/:userId', () => {
    it('should get status 200',  async () => {
        const res = await request(app)
            .put(`/admin/user/21`)
            .send({
                username: 'denus',
                email: 'test1@mail.ua',
                isadmin: false,
                id: 21,
            })
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
    });

    it('update user width wrong id',  async () => {
        const res = await request(app)
            .put(`/admin/user/1000`)
            .send({
                username: 'denus',
                email: 'test1@mail.ua',
                isadmin: false,
                id: 1000,
            })
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(400)
    });
})

describe('delete user /user/:userId', () => {
    it('should get status 200',  async () => {
        const res = await request(app)
            .delete(`/admin/user/15`)
            .send({
                id: 15,
            })
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body.success).toBeTruthy()
    });

    it('delete user',  async () => {
        const res = await request(app)
            .delete(`/admin/user/1000`)
            .send({
                id: 1000,
            })
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(400)
    });
})