var express = require('express');
var http = require('http');
var app = express();
var Speech = require('@google-cloud/speech');
var fs = require('fs');

const projectId = 'hackfin-185013';

const speechClient = Speech({
  projectId: projectId
});

const fileName = './nodejs-docs-samples/speech/resources/audio.raw';
const file = fs.readFileSync(fileName);
const audioBytes = file.toString('base64');
const config = {
  encoding: 'LINEAR16',
  sampleRateHertz: 16000,
  languageCode: 'en-US'
};
const audio = {
  content: audioBytes
};
const request = {
  audio: audio,
  config: config
};

http.createServer(app).listen(3000);

app.get('/', function(req,res){
//	res.send('Express used!');
	console.log('Example app is running on port 3000');
	speechClient.recognize(request).then((data) => {
    		const response = data[0];
   		 const transcription = response.results.map(result =>
        	result.alternatives[0].transcript).join('\n');
    		res.send(`Transcription: ${transcription}`);
 	 }).catch((err) => {
    		console.error('ERROR:', err);
 	 });
});
