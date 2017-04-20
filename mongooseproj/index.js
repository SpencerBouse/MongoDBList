const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://spencer:bouse@ds115918.mlab.com:15918/peoplebase');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Get all of people
app.get('/people',function(req,res){
	User.find().exec((err,response)=>{
		if(err) console.log(err)
		res.send(response)
	})
})

app.post('/people',function(req,res){
	let user = new User({"name":req.body.name,"age":req.body.age,"likesJS":req.body.likesJS});
	user.save(err=>{
		console.log(err)
	})
	res.json({success:"Success Message"});
})

app.get('/people/:id',function(req,res){
	let id = req.params.id
	User.find(_id=id).exec((err,response)=>{
		if(err) console.log(err)
		res.send(response)
	})
})

app.delete('/people/:id',function(req,res){
	let id = req.params.id
	User.find(_id=id).exec((err,response)=>{
		if(err) console.log(err)
		res.send(response)
	})
})


// Start the server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
