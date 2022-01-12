const app = require('../index')
const request = require('supertest')


describe('verify __tests__', () => {
    it('verify success', async () => {
        const res = await request(app)
            .get('/private/profiles/list')
            .set('Accept', 'application/json')
            .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Array)

    })
})