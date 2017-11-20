var request=require('request');
const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});*/

   var params = {
     "shortAudio" : "{boolean}"
   };

   var options = {
     url: 'https://westus.api.cognitive.microsoft.com/spid/v1.0/verificationProfiles',
     method: 'POST',
     headers: {
       'Content-Type': {
          "locale":"en-us",
        },
       'Ocp-Apim-Subscription-Key': '0625562654c04b82a846e3ea92e850e7'
     },
   };

   request(options, function(err, res, body) {
     if (res && (res.statusCode === 200)) {
       console.log("Back succeed"+body);
     }
   });