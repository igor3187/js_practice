const user = {email: 'jdoe@gmail.com'};

try {
    //produce a referenceError
    //myFunction();

    //produce a TypeError
    //null.myFunction();

    //will produce syntax error
    //console.log(eval('Hello World'));

    //will produce a URIError
    //decodeURIComponent('%')

    if (!user.name) {
        //throw 'User has no name';
        //throw new SyntaxError('User has no name');
    }
} catch (e) {
    console.log(`User Error: ${e.message}`);
    //console.log(`${e.name}: Its null stupid!!`);
    //console.log(e);
    //console.log(e.message);
    //console.log(e.name);
    //console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');
