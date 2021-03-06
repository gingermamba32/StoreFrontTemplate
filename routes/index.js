var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');


// heroku statuc file server
process.env.PWD = process.cwd()

/* GET home page. */
var html_dir = '../views/';
router.get('/', function(req, res, next) {
	res.sendFile(path.join(process.env.PWD+'/index.html'));
  //res.sendFile('/Users/michaelmontero/Desktop/StoreFrontTemplate/views/index.html');
});


router.post('/send', function(req, res, next){
	console.log(req.body.email);

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL, // Your email id
            pass: process.env.PASSWORD // Your password
        }
    });

	var mailOptions = {
    from: req.body.email, // sender address
    to: 'david@emeraldcityca.org', // list of receivers
    subject: 'Re: Contact Us -> ' + req.body.name + '/'+ req.body.email, // Subject line
    text: req.body.name + ' has sent a message via ' + req.body.email + '<br>' + req.body.message
	};

	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    } else{
        console.log('Message sent: ' + info.response);
        res.json({yo: 'EMAIL HAS BEEN SENT. WE WILL CONTACT YOU SOON'});
    	};
	});




})





module.exports = router;
