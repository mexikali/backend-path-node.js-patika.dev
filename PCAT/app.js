const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

/*
const myLogger = (req, res, next) => {
    console.log("Middleware is run");
    next();
}
app.use(myLogger);
*/

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public/img/about-1.jpg'));
})

const port = 3000;
app.listen(port,() => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
    console.log(`http://localhost:${port}/`);
});