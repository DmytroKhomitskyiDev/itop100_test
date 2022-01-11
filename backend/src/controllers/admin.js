const db = require("../config/db");


class AdminController {
    //get all users.
    async getUsers(id, res) {
        let results = await db.query(`
            SELECT U.username, U.email, U.id,
                (SELECT COUNT(id) FROM profiles WHERE user_id=U.id) as count_profile
            FROM users U
                
            WHERE NOT id=$1
        `,[id]).catch(console.log);
//LEFT JOIN profiles P ON (P.user_id=U.id)

        console.log(results)
        res.status(200).send({
            success: true,
            // data: results.rows.some(row => row.id) ? results.rows : []
            data: results.rows
        })
    }
    //get user by id.
    async getUserById(id, res) {
        let results = await db.query(`SELECT * FROM users WHERE id=$1`,[id]).catch(console.log);
        let profilesUser = await db.query(`SELECT * FROM profiles WHERE user_id=$1`,[id]).catch(console.log);

        res.status(200).send({
            success: true,
            data: {user:results.rows.some(row => row.id) ? results.rows : [], profilesUser:profilesUser.rows}
        })

    }
    //get dashboard.
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

    //update user.
    async updateUser(values, res, userId) {
        await db.query(`UPDATE users SET username=$1, email=$2, isadmin=$3 WHERE id=$4`,[values.username,values.email,values.isadmin, userId]).catch(console.log);
        res.status(200).send({
            success: true
        })
    }

    //delete user and profiles
    async deleteUser(userId, res) {
      await db.query(`DELETE FROM users WHERE id=$1`, [userId]).catch(console.log);
      await db.query(`DELETE FROM profiles WHERE user_id=$1`, [userId]).catch(console.log);
      res.status(200).send({
          success: true
      })
    }
}


module.exports = new AdminController;