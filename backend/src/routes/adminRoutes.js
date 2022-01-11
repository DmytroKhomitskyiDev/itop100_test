const express = require("express");
const router = express.Router();
const adminVerify = require("../guards/adminVeryfy");
const AdminController = require("../controllers/admin");
const UserController = require("../controllers/user");

//Get all users.
router.get('/users',adminVerify, async (req,res) => {
    const {id} = req.user
    return AdminController.getUsers(id,res);
});
//Get user be id.
router.get('/user/:id',adminVerify, async (req,res) => {
    const {id} = req.params
    return AdminController.getUserById(id,res);
});

//Get dashboard
router.get('/dashboard',adminVerify, async (req,res) => {
    return AdminController.getDashboard(res)
});

//Update a user.
router.put('/user/:userId', async (req,res) => {
    let {userId} = req.params;
    const value = req.body
    await AdminController.updateUser(value,res, userId);
});

//delete user and profiles.
router.delete('/user/:userId', async (req,res) => {
    let {userId} = req.params;
    await AdminController.deleteUser(userId,res);
});

module.exports = router;