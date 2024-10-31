const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.status(201).send('INDEX SAYFASI');
});

const port = 3000;
app.listen(port,() => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
    console.log(`http://localhost:${port}/`);
});