const db = require("../config/db");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class User {
  //get all users.
  async getUsers() {
    let results = await db.query(`SELECT * FROM users`).catch(console.log);
    return results.rows.some(row => row.id) ? results.rows : [];
  }

  //create a user.
  async createUser(user) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)
    const res = await db
      .query(`insert into users (userName, email, password, isAdmin) values ($1, $2, $3, $4)`, [user.username, user.email, hashedPassword, user.isAdmin])
      .catch(console.log);
    return res;
  }

  //login
  async loginUser(user) {
    console.log(user)
    const res = await db
        .query("")
        .catch(console.log);
    return res;
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

module.exports = User;