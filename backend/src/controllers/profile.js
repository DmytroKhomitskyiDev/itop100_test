const db = require("../config/db");

class Profile {

    async getProfiles() {
        const result = await db.query(`SELECT * FROM profiles`).catch(console.log)
        return result.rows
    }

    //create a profile.
    async createProfile(profile,res, userId) {
        console.log(profile)
        await db
            .query(`insert into profiles (user_id, name, gender, birthdate, city) values ($1, $2, $3, $4, $5)`,
                [userId, profile.name, profile.gender, profile.birthdate, profile.city])
            .catch(console.log);
        return res.send({
            success: true
        });
    }
}

module.exports = Profile;