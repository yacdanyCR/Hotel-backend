const express = require('express');
const cors = require('cors');
const { json } = require('express');
const { UserRoute } = require('./Routes/UserRoutes');
const { GuestRoute } = require('./Routes/GuestRoute');
const { BookingRoute } = require('./Routes/BookingsRouter');
const app = express();
const port = process.env.PORT || 3000

app.use(cors());
app.use(json());

app.use(('/api/user'), UserRoute);
app.use(('/api/guest'), GuestRoute);
app.use(('/api/booking'), BookingRoute);

app.listen(port);