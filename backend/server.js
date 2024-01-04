import express, { response } from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import mysql from 'mysql'

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
})


// Route for getting all users
app.get('/', (request, response) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (error, data) => {
        if (error) return response.json(error)
        return response.json(data)
    })
})

// Route for creating a new user
app.post('/create', (req, res) => {
    const sql = "INSERT INTO users (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.Name,
        req.body.Email
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

// Route for updating a user
app.put('/edit/:ID', (req, res) => {
    const sql = "update users set `Name` = ?, `Email` = ? WHERE `ID` = ?";
    const values = [
        req.body.Name,
        req.body.Email
    ]
    const { ID } = req.params;
    db.query(sql, [...values, ID], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})