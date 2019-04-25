require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/send', (req, res) => {
  console.log(req.body);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
