const router = require('express').Router();
const pool = require('../database/database');

//registration

router.post("/register", async (req, res) => {
    try {
        //1.  destructure the req.body (name, email, password)
        const { name, email, password } = req.body; 


        //2 check if user exist (if user exist then throw error)

        const user = await pool.query("SELECT * FROM users_prueba WHERE user_email = $1", [
            email
        ]);

        res.json(user.rows);

        //3 Bcrypt the user password
        //4 enter the new user inside our database 
        //5. generating our jwt token
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Send Error');
    }
});

module.exports = router;