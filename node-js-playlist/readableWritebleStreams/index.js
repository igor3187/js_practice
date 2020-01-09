const http = require('http');
const fs = require('fs');

//const myReadStream = fs.createReadStream(__dirname + '/readMy.txt');
const myReadStream = fs.createReadStream(__dirname + '/readMy.txt', 'utf-8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeMy.txt');

//manually
// myReadStream.on('data', function (chunk) {
//     console.log('new chunk is received');
//     myWriteStream.write(chunk);
// });

//automatic
myReadStream.pipe(myWriteStream);

myReadStream.on('data', function (chunk) {
    console.log('new chunk received');
    myWriteStream.write(chunk);
});


