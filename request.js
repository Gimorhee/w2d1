var request = require('request');
var fs = require('fs');

// console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err){
         console.log(err);
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log(response.statusMessage);
         console.log(response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
       // console.log('Download complete.');



