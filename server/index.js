const express = require ('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


app.use(cors());
app.use(express.json());

//Route

app.post('/add', async (req, res) => {
    try {
        const { selectedTechnologies, hoursPerWeek , test} = req.body;

        const newUser = await pool.query("INSERT INTO user_info (technologies, nb_hours,test) VALUES($1, $2,$3) RETURNING *", [selectedTechnologies, hoursPerWeek,test]);
        

        res.json(newUser.rows[0]);
        console.log(" added successfully");
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/get', async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM user_info");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});