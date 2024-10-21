/*
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız:
    1 - employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
    2 - Bu veriyi okuyalım. (READ)
    3 - Bu veriyi güncelleyelim.
    4 - Dosyayı silelim.
*/

const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

fs.readFile('employees.json', 'utf8', (err, data) => { // callback fonksiyonu ile birlikte çalıştırıyoruz.
    if (err) console.log(err);                         // hata kontrolü
    console.log(data);                                 // okunan verinin çıktısının alınması
});

fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err) => {
    if (err) console.log(err);
});

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});