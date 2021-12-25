const express = require("express");
const router = express.Router();
const User = require('../controllers/user')
const jwt = require('jsonwebtoken')

//Get all users.
router.get('/', async (req,res) => {
    let users = await new User().getUsers();
    res.send(users)
});

//Register a user.
router.post('/user/register', async (req,res) => {
    let data = req.body;
    const result = new User().createUser(data, res);
    res.send(result)
});

//login a user.
router.post('/user/login', async (req,res) => {
    let data = req.body;
    const result = new User().loginUser(data, res);
    console.log(result)
    res.send(result)
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
    await new User().deleteUser(userId);
    let users = await new User().getUsers();
});

module.exports = router;