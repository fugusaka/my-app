require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// API routes go here
// example: app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
