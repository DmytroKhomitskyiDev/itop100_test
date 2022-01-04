const express = require("express");
const router = express.Router();
const adminVerify = require("../guards/adminVeryfy");
const AdminController = require("../controllers/admin");

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
    console.log(req.user)
    return AdminController.getDashboard(res)
});

module.exports = router;