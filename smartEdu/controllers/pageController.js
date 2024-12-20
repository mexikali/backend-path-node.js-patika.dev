const nodemailer = require('nodemailer');
const Course = require('../models/Course');
const User = require('../models/User');

exports.getIndexPage = async (req, res) => {
  
    const courses = await Course.find().sort('-createdAt').limit(2);
    const totalCourses = await Course.find().countDocuments();
    const totalStudents = await User.countDocuments({role: 'student'});
    const totalTeachers = await User.countDocuments({role: 'teacher'});
    res.status(200).render('index', {
      page_name: 'index',
      courses,
      totalCourses,
      totalStudents,
      totalTeachers
    });
  };

exports.getAboutPage = (req,res) => {
    res.status(200).render('about', {page_name: 'about'});
};

exports.getRegisterPage = (req,res) => {
    res.status(200).render('register', {page_name: 'register'});
};

exports.getLoginPage = (req,res) => {
    res.status(200).render('login', {page_name: 'login'});
};

exports.getContactPage = (req,res) => {
    res.status(200).render('contact', {page_name: 'contact'});
};

exports.sendEmail = async (req,res) => {

    try{
    const outputMessage = `
    <h1>Message Details </h1>
    <ul>
        <li> Name: ${req.body.name}</li>
        <li> Email: ${req.body.email}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: "omerfaruksezenn@gmail.com",
          pass: "nuvmkgsmryeiqsse",
        },
      });
      
    const info = await transporter.sendMail({
          from: '"Smart EDU Contact Form" <omerfaruksezenn@gmail.com>', // sender address
          to: "omer.sezen@metu.edu.tr", // list of receivers
          subject: "Smart Edu Contact Page New Message ✔", // Subject line
          text: "Hello world?", // plain text body
          html: outputMessage, // html body
    });
      
    console.log("Message sent: %s", info.messageId);

    req.flash("success", "We Received your message successfully");

    res.status(200).redirect('/contact');
    } catch (err) {
        req.flash("error", `Something happened! ${err}`);
        res.status(200).redirect('/contact');
    }
};
