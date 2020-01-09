const fs = require('fs');

//sync
//let readMe = fs.readFileSync('read.txt', 'utf-8');
//console.log(readMe);
//fs.writeFileSync('write.txt', readMe);

//async
fs.readFile('read.txt', 'utf-8', (err, data) => {
    //console.log(data)
    fs.writeFile('writeAsync.txt', data, err1 => {
            return err1
        }
    );
});
