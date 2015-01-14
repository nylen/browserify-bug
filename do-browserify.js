var browserify = require('browserify'),
    fs         = require('fs'),
    path       = require('path');

console.log('Generating bundle.js ...');

var b = browserify('test', {
    standalone : 'test'
}).bundle();

b.on('error', function(err) {
    console.error('Browserify error: ' + err.message);
    process.exit(1);
});

var f = fs.createWriteStream(
    path.join(__dirname, 'bundle.js'));

b.pipe(f);

f.on('close', function() {
    console.log('Requiring bundle.js ...');
    require('./bundle');
});
