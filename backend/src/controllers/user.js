const db = require("../config/db");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  //get all users.
  async getUsers(id) {
    let results = await db.query(`SELECT * FROM users WHERE NOT id=$1`,[id]).catch(console.log);
    return results.rows.some(row => row.id) ? results.rows : [];
  }

  //create a user.
  async createUser(user,res) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)
     await db
      .query(`insert into users (userName, email, password, isadmin) values ($1, $2, $3, $4)`, [user.username, user.email, hashedPassword, user.isAdmin || false])
      .catch(console.log);
    return res.send({success:true});
  }

  //login
  async loginUser(data, res) {
    const user = await db.query(`SELECT * FROM users WHERE email=$1`, [data.email])
    if (!user.rows.length) {
      return res.status(400).send({
        success: false,
        message: "User not exist"
      })
    }

    const validPassword = await bcrypt.compare(data.password, user.rows[0].password)
    if(!validPassword) {
      return res.status(400).send({
        success: false,
        message: "Password is incorrect"
      })
    }

    const token = jwt.sign({id: user.rows[0].id}, process.env.TOKEN_SECRET)
    const {password, ...userData} = user.rows[0]

    return res.header("auth-token", token).send({
      success: true,
      token,
      user: userData
    })
  }



  //update a user.
  async updateUser(userId) {
    //get the previous user.
    let original_user = await db
      .query()
      .catch(console.log);
    return;
  }

  //delete a user.
  async deleteUser(userId) {
    await db.query(`DELETE FROM users WHERE id=$1`, [parseInt(userId)]).catch(console.log);
    return;
  }
}

module.exports = new UserController;