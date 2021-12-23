const db = require("../config/db");

class User {
  //get all users.
  async getUsers() {
    let results = await db.query(`SELECT * FROM user`).catch(console.log);
    return results.rows.some(row => row.id) ? results.rows : [];
  }

  //create a user.
  async createUser(user) {
    await db
      .query("")
      .catch(console.log);
    return;
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