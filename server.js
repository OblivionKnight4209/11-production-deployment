'use strict';

require('dotenv').config();

const express = require('express');
const PORT=process.env.PORT;
//this below talks to the database//
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

const app=express();

app.get ('/api/v1/books'),(req, res) => {
    client.query(`
    SELECT * FROM Books;
    `).then (results => res.send(results.rows));
});


app.listen(PORT,() => console.log('listening on PORT, PORT'));