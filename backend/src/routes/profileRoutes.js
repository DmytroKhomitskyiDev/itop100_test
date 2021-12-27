const express = require("express");
const router = express.Router();
const Profile = require('../controllers/profile');
const verify = require('../guards/authVerify');



// get profiles
router.get('/profile', async (req,res) => {
    let profiles = await new Profile().getProfiles();
    res.send(profiles)
});




//create a profiles.
router.post('/profile/create',verify, async (req,res) => {
    const data = req.body;
    const { id } = req.user
    return new Profile().createProfile(data, res, id);
});


module.exports = router;