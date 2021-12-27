const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);

app.use('/private', profileRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});