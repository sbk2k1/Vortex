const request= require('supertest')
const app= require('../src/app.js')
const User= require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: 'videotapes'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'SBK',
        email: 'bhattacharyasaptarshi2001@gmail.com',
        password: 'ThereIsNoCatharsis'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login non-existent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'thisisnotthepassword'
    }).expect(400)
})