const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

app.get('/', (req,res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.send(blog);
})

const port = 3000;
app.listen(port,() => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
    console.log(`http://localhost:${port}/`);
});