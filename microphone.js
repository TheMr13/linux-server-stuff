//https://www.npmjs.com/package/microphone

var mic = require('microphone');

mic.startCapture();

mic.audioStream.on('data', function(data) {
    process.stdout.write(data);
});