const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong ');
            }
            resolve();
        }, 2000);
    });
}

function getPost() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'})
    .then(getPost)
    .catch(function (err) {
        console.log(err);
    });
