const db = require("../config/db");


class AdminController {
    //get all users.
    async getUsers(id, res) {
        let results = await db.query(`SELECT * FROM users WHERE NOT id=$1`,[id]).catch(console.log);
        res.status(200).send({
            success: true,
            data: results.rows.some(row => row.id) ? results.rows : []
        })
    }
    //get all users.
    async getUserById(id, res) {
        let results = await db.query(`SELECT * FROM users WHERE id=$1`,[id]).catch(console.log);
        let profilesUser = await db.query(`SELECT * FROM profiles WHERE user_id=$1`,[id]).catch(console.log);
        res.status(200).send({
            success: true,
            data: {user:results.rows.some(row => row.id) ? results.rows : [], profilesUser:profilesUser.rows}

        })
    }
    //get the previous user.
    async getDashboard(res) {
        const users = await db.query(`SELECT id FROM users `).catch(console.log);
        const profiles = await db.query(`SELECT birthdate FROM profiles `).catch(console.log);
        const profilesAdult = profiles.rows.filter(el => {
            const todayYear = new Date().getFullYear()
            const currentYear = el.birthdate.split('.')[2]
            return todayYear - currentYear >= 18
        })
        res.status(200).send({
            success:true,
            data:[{count: users.rowCount,name:"users"}, {count: profiles.rowCount,name:"profiles"}, {count: profilesAdult.length,name:"adult"}]
        })
    }
}


module.exports = new AdminController;