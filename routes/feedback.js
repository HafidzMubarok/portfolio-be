var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
});

//Post Method
router.post('/', async (req, res) => {
    try {
        var senderData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            feedback: req.body.feedback,
        }
        var text =
            'From: ' + senderData.firstName + ' ' + senderData.lastName + '\n' +
            'Email: ' + senderData.email + '\n' +
            'Feedback: ' + senderData.feedback;
        var mailOptions = {
            from: 'no_reply@gmail.com',
            to: 'example@mail.com',
            subject: 'Portofolio Feedback',
            text: text
        };
    
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(400).json({message: error.message})
            } else {
              res.status(200).json('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;