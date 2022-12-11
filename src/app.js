const express = require('express');
const cors = require('cors');
const { json } = require('express');
const { UserRoute } = require('./Routes/UserRoutes');
const app = express();
const port = process.env.port || 3000

app.use(cors());
app.use(json());

app.use(('/api/user'), UserRoute);

app.listen(port);