const express = require("express");
const router = express.Router();
const Profile = require('../controllers/profile');
const verify = require('../guards/authVerify');



// get profiles
router.get('/profiles/list', verify, async (req,res) => {
    const { id } = req.user
    return new Profile().getProfiles(res, id);
});


//create a profiles.
router.post('/profile/create',verify, async (req,res) => {
    const data = req.body;
    const { id } = req.user
    return new Profile().createProfile(data, res, id);
});

// delete profile
router.delete('/profile/:id', verify, async (req,res) => {
    let {id} = req.params;
    console.log(req)
    return new Profile().deleteProfile(id, res);
});

module.exports = router;