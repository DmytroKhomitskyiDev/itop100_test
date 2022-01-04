const express = require("express");
const router = express.Router();
const ProfileController = require('../controllers/profile');
const verify = require('../guards/authVerify');
const adminVerify = require("../guards/adminVeryfy");
const UserController = require("../controllers/user");



// get profiles
router.get('/profiles/list', verify, async (req,res) => {
    const { id } = req.user
    console.log(req.user,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    return ProfileController.getProfiles(res, id);
});

//create a profiles.
router.post('/profile/create',verify, async (req,res) => {
    const data = req.body;
    const { id } = req.user
    return ProfileController.createProfile(data, res, id);
});

// delete profile
router.delete('/profile/:id', verify, async (req,res) => {
    let {id} = req.params;
    return ProfileController.deleteProfile(id, res);
});

//update profile
router.put('/profile/update/:id', verify, async (req,res) => {
    let {id} = req.params;
    const value = req.body
    return ProfileController.updateProfile(value,res,id);
});




module.exports = router;