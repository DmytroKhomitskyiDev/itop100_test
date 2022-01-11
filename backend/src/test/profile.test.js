const app = require('../index')
const request = require('supertest')

describe('get oll profiles success', () => {
    it('get profile success', async () => {
       const res = await request(app)
           .get('/private/profiles/list')
           .set('Accept', 'application/json')
           .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Array)

    })
})

describe('delete profile success /private/profile/:id', () => {
    it('get profile success', async () => {
       const res = await request(app)
           .delete('/private/profile/48')
           .send({
               id: 48,
           })
           .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
    })
})

describe('create profile success /profile/create/:currentUserId', () => {
    it('get profile success', async () => {
       const res = await request(app)
           .post('/private/profile/create/9')
           .send({
               user_id: 9,
               name:'banana',
               gender: 'male',
               birthdate: '04.01.2022',
               city: 'Kyiv'
           })
           .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body)

    })
})

describe('update profile  /profile/update/:id', () => {
    it('get profile success', async () => {
       const res = await request(app)
           .put('/private/profile/update/48')
           .send({
               id: 48,
               name:'banana',
               gender: 'female',
               birthdate: '04.01.2020',
               city: 'Kyiv'
           })
           .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQxNzQwOTU3fQ.KYxs8fEOCP0GqPuWE7lCLcANvKT6AB5QaGnnyVdqs0g')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
    })

})