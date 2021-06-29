const express = require('express');
const app = express();
const homepage = require('./router/homepage');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

app.use(homepage);

app.listen(3000)