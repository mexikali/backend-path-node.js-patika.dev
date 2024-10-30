const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/Photo');
const fs = require('fs');

const app = express();

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());

/*
const myLogger = (req, res, next) => {
    console.log("Middleware is run");
    next();
}
app.use(myLogger);
*/

// Routes
app.get('/', async (req,res) => {
    //res.sendFile(path.resolve(__dirname, 'public/img/about-1.jpg'));
    const photos = await Photo.find({}).sort('-dateCreated');
    res.render('index', {photos});
});

app.get('/photos/:id', async (req,res) => {
    const photo = await Photo.findById(req.params.id);
    res.render('photo', {photo});
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/add', (req,res) => {
    res.render('add');
});

app.post('/photos', async (req,res) => {
    // console.log(req.files.image);
    // await Photo.create(req.body);
    // res.redirect('/');

    const uploadDir = 'public/uploads';
    if(!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir);
    }

    let uploadedImage = req.files.image;
    let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name;

    uploadedImage.mv(uploadPath, async () => {
        await Photo.create({
            ...req.body,
            image: '/uploads/' + uploadedImage.name
        });
        res.redirect('/');
    });

    
});

const port = 3000;
app.listen(port,() => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
    console.log(`http://localhost:${port}/`);
});