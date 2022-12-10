const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();
const port = process.env.port || 3000

app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
    res.send("Welcome")
})

app.listen(port);