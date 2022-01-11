const jwt = require("jsonwebtoken");
const db = require("../config/db");

module.exports = async function (req, res, next) {

    const token = req.header("auth-token");

    if(!token) return res.status(401).send("Access Defined");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        const {id} = req.user
        const data = await db.query(`SELECT isadmin FROM users WHERE id=$1`,[id])
        if(!data.rows[0].isadmin){
            res.status(401).send({
                success:false,
                message: 'Current user is not admin'
            })
        }
        next()
    } catch (error) {
        console.log("Invalid token", error);
    }
}