const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

// DB connection

const conn = require('./db/conn');

conn();

// Rotas
const routes = require('./routes/router');

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// iivlCSeYZJ6K3MpI

