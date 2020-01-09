let fs = require('fs');

//delete file
//fs.unlinkSync('text.txt');

//create folder
//fs.mkdirSync('stuff');

//delete folder
//fs.rmdirSync('stuff');

//create, read and write
fs.mkdir('stuff',function () {
    fs.readFile('readMe.txt', 'utf-8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data, err => err)
    })
});

//delete folder and file
fs.unlink('./stuff/writeMe.txt', function () {
    fs.rmdirSync('stuff');
});
 
