const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

/*
const myLogger = (req, res, next) => {
    console.log("Middleware is run");
    next();
}
app.use(myLogger);
*/

// Routes
app.get('/', (req,res) => {
    //res.sendFile(path.resolve(__dirname, 'public/img/about-1.jpg'));
    res.render('index');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/add', (req,res) => {
    res.render('add');
});

const port = 3000;
app.listen(port,() => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
    console.log(`http://localhost:${port}/`);
});