const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://admin-Vishal:mobilea1@learnstream.mw3jrr3.mongodb.net/Video-Database', {useNewUrlParser: true});

const videoSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  location: String,
  duration: String,
  views: {
    type: Number,
    default: 0
  },
  like: {
    type: Number,
    default: 0
  },
  dislike: {
    type: Number,
    default: 0
  }
});

const Video = mongoose.model('Video', videoSchema);


// Video.find().then(function(videos, err){

//     if(err){
//         // console.log(err);
//     }else{
//         app.get("/api", function(req,res){
//             res.send(videos);
//         });
//     }
    
// });


    
// const video = new Video({
//     title: "Vishal",
//     thumbnail: "test",
//     location: "works",
//     duration: "00",
//     views: 10,
//     like: 50,
//     dislike: 30
// })

// video.save();



app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${process.env.PORT || 5000}`);
});
