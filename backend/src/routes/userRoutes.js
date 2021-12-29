const express = require('express');
const router = express.Router();
const User = require('../controllers/user')
const verifySignUp = require('../guards/authVerify')
const jwt = require('jsonwebtoken')
const verify  =require('../guards/authVerify')

//Get all users.
router.get('/', async (req,res) => {
    let users = await new User().getUsers();
    res.send(users)
});

//Register a user.
router.post('/user/register', async (req,res) => {
    let data = req.body;
    return new User().createUser(data, res);
});

//login a user.
router.post('/user/login', async (req,res) => {
    let data = req.body;
    return new User().loginUser(data, res);
});

//Update a user.
router.put('/user/:userId', async (req,res) => {
    let {userId} = req.params;
    await new User().updateUser(userId,res);
    let users = await new User().getUsers();
});

//Delete a user.
router.delete('/users/:userId', async (req,res) => {
    let {userId} = req.params;
    await new User().deleteUser(userId, res);
    let users = await new User().getUsers();
});

module.exports = router;