const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')
const verifySignUp = require('../guards/authVerify')
const jwt = require('jsonwebtoken')
const verify  = require('../guards/authVerify')
const adminVerify = require('../guards/adminVeryfy')



//Register a user.
router.post('/user/register', async (req,res) => {
    let data = req.body;
    return UserController.createUser(data, res);
});

//login a user.
router.post('/user/login', async (req,res) => {
    let data = req.body;
    return UserController.loginUser(data, res);
});

//Update a user.
router.put('/user/:userId', async (req,res) => {
    let {userId} = req.params;
    await new User().updateUser(userId,res);
    let users = await UserController.getUsers();
});

//Delete a user.
router.delete('/users/:userId', async (req,res) => {
    let {userId} = req.params;
    await new User().deleteUser(userId, res);
    let users = await UserController.getUsers();
});


module.exports = router;