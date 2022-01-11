const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')


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


module.exports = router;