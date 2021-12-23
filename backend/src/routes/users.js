const express = require("express");
const router = express.Router();
const User = require('../controllers/user')

//Get all users.
router.get('/', async (req,res) => {
    let users = await new User().getUsers();
    res.send(users)
});

//Create a user.
router.post('/user', async (req,res) => {
    let data = req.body;
    await new User().createUser(data, res);
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