const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./models');
require('dotenv').config();
// sequelize.sync();

// read req.body
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import Route ...
const authRoute = require('./route/authRoute');

// Route

app.use('/', authRoute);

/// Err

app.use((err, req, res, next) => {
  res.status(400).json({ message: err });
});

// Port

let port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server is Running on ${port}`));
