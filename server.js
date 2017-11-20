// # Twilio & VoiceIt Demo

// This application demonstrates how Twilio integrates with the VoiceIt
// Voiceprint Portal, allowing for biometric authentication with your voice
// applications.

// Standard Operating Procedure
// -------------------------------

var twilio     = require('twilio'),
    SHA256     = require('crypto-js/sha256'),
    bodyParser = require('body-parser'),
    express    = require('express'),
    request    = require('request');

// Prepare the Express server and body parsing middleware.
var port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser());

var VOICEIT_DEV_ID = process.env.VOICEIT_DEV_ID;

// Stubbing VoiceIt Profiles with Phone Numbers
// --------------------------------------------
// VoiceIt authentication requires an email address, so we will make a fake
// one for this caller using the response body posted from Twilio.
var callerCredentials = function(body) {
   // Twilio's `body.From` is the caller's phone number, so let's use it as
   // identifier in the VoiceIt profile. It also means, the authentication is
   // bound only to this phone number.
   return  {
     number   : body.From,
     email    : body.From + '@twiliobioauth.example.com',
     password : SHA256(body.From)
   };
};

// Accept Incoming Calls
// ---------------------
// We need to accept incoming calls from Twilio. The fully-qualified URL should
// be added to your Twilio account and publicly available.
app.post('/incoming_call', function(req, res) {
  console.log("called");
  var caller  = callerCredentials(req.body);
  var twiml   = new twilio.twiml.VoiceResponse;
  twiml.say('Welcome to the self service stock channel.'); 

  // Prepare options for the VoiceIt `GET /sivservice/api/users` API request.
  var options = {
    url: 'https://siv.voiceprintportal.com/sivservice/api/users',
    headers: {
      'VsitEmail'       : caller.email,
      'VsitPassword'    : caller.password,
      'VsitDeveloperId' : VOICEIT_DEV_ID
    }
  };

  request(options, function (error, response,  body) {
    console.log("authorizing");
    // When VoiceIt responds with at `200`, we know the user's account profile
    // exists in the VoiceIt system.
    if (!error && response.statusCode == 200) {
      console.log("registered");
      var voiceIt = JSON.parse(body);

      // Greet the caller when their account profile is recognized by the VoiceIt API.
      twiml.say(
        'You are now going through Voice Authentication. Your phone number has been recognized.'
      );
      // Let's provide the caller with an opportunity to enroll by typing `1` on
      // their phone's keypad.
      twiml.gather({
        action    : '/enroll_or_authenticate',
        numDigits : 1,
        timeout   : 3
      }, function () {
        this.say(
          'You can now log in, or press 1 now to enroll for the first time.'
        );
      });
      twiml.redirect('/enroll_or_authenticate?digits=TIMEOUT');

      res.send(twiml.toString());
    } else {
      console.log("not registered");
      switch(response.statusCode) {
        // Create a VoiceIt user when the HTTP status is `412 Precondition Failed`.
        case 412:
          // Prepare options for the VoiceIt `POST /sivservice/api/users` API request.
          var options = {
            url: 'https://siv.voiceprintportal.com/sivservice/api/users',
            headers: {
              'VsitDeveloperId' : VOICEIT_DEV_ID,
              'VsitEmail'       : caller.email,
              'VsitFirstName'   : 'First' + caller.number,
              'VsitLastName'    : 'Last' + caller.number,
              'VsitPassword'    : caller.password,
              'VsitPhone1'      : caller.number
            }
          };

          request.post(options, function (error, response,  body) {
            if (!error && response.statusCode == 200) {
              var voiceIt = JSON.parse(body);
              console.log(voiceIt);
            } else {
              console.log(response.statusCode);
              console.log(body);
            }
          });

          twiml.say(
            'Welcome to the Voice Authentication system. You are a new user, ' +
            'you will now be enrolled.'
          );
          // Then we'll want to send them immediately to enrollment.
          twiml.redirect('/enroll');

          res.send(twiml.toString());
          break;
        default:
          new Error('An unhandled error occured');
      }
    }
  });
});

// Routing Enrollments & Authentication
// ------------------------------------
// We need a route to help determine what the caller intends to do.
app.post('/enroll_or_authenticate', function(req, res) {
  console.log("enroll/authenticate");
  var digits = req.body.Digits;
  console.log("recieved digits = " + digits);
  var twiml  = new twilio.twiml.VoiceResponse();

  // When the caller asked to enroll by pressing `1`, provide friendly
  // instructions, otherwise, we always assume their intent is to authenticate.
  if (digits == 1) {
    twiml.say(
      'You have chosen to create a new account with your voice. You will be ' +
      'asked to say a phrase 3 times, then you will be able to log in with that phrase.'
    );
    twiml.redirect('/enroll');
  } else {
    twiml.redirect('/authenticate');
  }

  res.send(twiml.toString());
});

// Enrollments
// -----------
app.post('/enroll', function(req, res) {
  console.log("enrolling");
  var enrollCount = req.query.enrollCount || 0;
  var twiml       = new twilio.twiml.VoiceResponse();

  twiml.say('Please say the following phrase to enroll.');
  twiml.pause(1);
  twiml.say('Never forget tomorrow is a new day.');
  twiml.record({
    action    : '/process_enrollment?enrollCount=' + enrollCount,
    maxLength : 5,
    trim      : 'do-not-trim'
  });

  res.send(twiml.toString());
});

app.post('/authenticate', function(req, res) {
  console.log("authenticating");
  var twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Please say the following phrase to authenticate.');
  twiml.pause(1);
  twiml.say('Never forget tomorrow is a new day.');
  // We neeed to record a `.wav` file. This will be sent to VoiceIt for authentication.
  twiml.record({
    action    : '/process_authentication',
    maxLength : '5',
    trim      : 'do-not-trim',
  });

  res.send(twiml.toString());
});

app.post('/process_enrollment', function(req, res) {
  var caller       = callerCredentials(req.body);
  var enrollCount  = req.query.enrollCount;
  var recordingURL = req.body.RecordingUrl + ".wav";
  // Prepare options for the VoiceIt `POST /sivservice/api/enrollments/bywavurl API request.
  var options      = {
    url: 'https://siv.voiceprintportal.com/sivservice/api/enrollments/bywavurl',
    headers: {
      'VsitDeveloperId' : VOICEIT_DEV_ID,
      'VsitEmail'       : caller.email,
      'VsitPassword'    : caller.password,
      'VsitwavURL'      : recordingURL
    }
  };

  request.post(options, function (error, response, body) {
    var twiml = new twilio.twiml.VoiceResponse();

    if (!error && response.statusCode == 200) {
      var voiceIt = JSON.parse(body);

      if (voiceIt.Result == 'Success') {
        enrollCount++;
        // VoiceIt requires at least 3 successful enrollments.
        if (enrollCount > 2) {
          twiml.say(
            'Thank you, recording recieved. You are now enrolled. You can log in.'
          );
          twiml.redirect('/authenticate');
        } else {
          twiml.say(
            'Thank you, recording recieved. You will now be asked to record your phrase again.'
          );
          twiml.redirect('/enroll?enrollCount=' + enrollCount);
        }
      } else {
        twiml.say('Sorry, your recording did not stick. Please try again.');
        twiml.redirect('/enroll?enrollCount=' + enrollCount);
      }
    } else {
      twiml.say('Sorry, your recording did not stick. Please try again');
      twiml.redirect('/enroll?enrollCount=' + enrollCount);
    }

    res.send(twiml.toString());
  });
});

app.post('/process_authentication', function(req, res) {
  var caller       = callerCredentials(req.body);
  var recordingURL = req.body.RecordingUrl + '.wav';
  var options      = {
    url: 'https://siv.voiceprintportal.com/sivservice/api/authentications/bywavurl',
    headers: {
      'VsitAccuracy'              : 5,
      'VsitAccuracyPassIncrement' : 2,
      'VsitAccuracyPasses'        : 4,
      'VsitConfidence'            : 89,
      'VsitDeveloperId'           : VOICEIT_DEV_ID,
      'VsitEmail'                 : caller.email,
      'VsitPassword'              : caller.password,
      'VsitwavURL'                : recordingURL
    }
  };

  request.post(options, function(error, response, body) {
    var twiml = new twilio.twiml.VoiceResponse();

    if (!error && response.statusCode == 200) {
      var voiceIt = JSON.parse(body);
      console.log(voiceIt);

      switch(voiceIt.Result) {
        case 'Authentication failed. Voiceprint Phrase Was Not Recognized. Please log in to https://voiceit.io/console to manage your Voiceprint Phrases':
          twiml.say('Your authentication did not pass. Please try again.');
          twiml.redirect('/authenticate');
          break;
        default:
          twiml.say(voiceIt.Result);
          twiml.say('Please pay attenetion to the Risk Disclosure Statements from H-K-M-A');
          twiml.pause({length: 1});
          twiml.say('Investment involves risks. The price of stocks fluctuates, sometimes dramatically.');
          twiml.pause({length: 1});
         twiml.say('Nevermind, we dont have that much time');
         twiml.pause({length: 1});
  const gather = twiml.gather({
   input: 'speech',
   timeout: 6,
     action: 'https://puzzling-bed-9077.twil.io/repeat'
  });
  gather.say('Please speak out your order');
  // console.log(twiml.toString());
  // // res.type('text/xml');
  // res.send(twiml.toString());
      }
    } else {
      twiml.say('API Error. Your authentication did not pass. Please try again.');
      twiml.redirect('/authenticate');

      new Error(response.statusCode, body);
    }

    res.send(twiml.toString());
  });
});

app.listen(port);
console.log('Running bioauthentication on port ' + port);
