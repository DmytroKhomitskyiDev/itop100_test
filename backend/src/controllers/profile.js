const db = require("../config/db");

class Profile {

    async getProfiles(res,userId) {
        const result = await db.query(`SELECT * FROM profiles WHERE user_id=$1`,[userId]).catch(console.log)
        return res.send(result.rows)
    }

    async deleteProfile(id, res) {
        await db.query(`DELETE FROM profiles WHERE id=$1`,[id]).catch(console.log)
        return res.send({
            success: true
        });
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