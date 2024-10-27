const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create Photo
Photo.create({
    title: 'Photo Title 1',
    description: 'Photo description 1 lorem ipsum',
});

// read a photo
Photo.find({}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}); 

// update photo
const id = "671e8915ad9f72844e603139";

Photo.findByIdAndUpdate(
    id, {
        title: "Photo Title 1 updated",
        description: "Photo description 1 updated",
    }).then((data) => {
        // data is old one ( before update )
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });


// delete photo
//const id = "671e8915ad9f72844e603139";
Photo.findByIdAndDelete(id).then((data) => {
    console.log("Data is deleted...");
}).catch((error) => {
    console.log(error);
});