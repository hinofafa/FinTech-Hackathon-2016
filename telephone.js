const http = require('http');
var express = require('express');
const twilio = require('twilio');
const VoiceResponse = twilio.twiml.VoiceResponse

const app = express()

app.post('/', function(req, res){
	console.log("Posted:wq");
	const twiml = new VoiceResponse();
	twiml.say('Welcome to the self service stock channel, please pay attention to the Risk Disclosure Statements from H-K-M-A.'); 
	twiml.pause({length: 1});
	twiml.say('Investment involves risks. The price of stocks fluctuates, sometimes dramatically.');
	twiml.pause({length: 1});
	twiml.say('Nevermind, this is too long to read');
	twiml.pause({length: 1});
	const gather = twiml.gather({
 	 input: 'speech',
 	 timeout: 6,
  	 action: 'https://puzzling-bed-9077.twil.io/repeat'
	});
	gather.say('Please speak out your order ')
	console.log(twiml.toString());
	res.type('text/xml');
	res.send(twiml.toString());
});

app.listen(3000,'0.0.0.0',function(){
	
});
console.log("listen at port 3000");
