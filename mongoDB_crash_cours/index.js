//create database
use acme; //will create database if does not exist
//show available database
show dbs; //if db is empty,it will does not show the name of db
//show switched(current)db
db;
//create collection in current db
db.createCollection('collection name');
//show available collection in current db
show
collections;
//insert data in chosen collection
db. < collectionname >.insert();
//for example
db.posts.insert({
    title: 'Post One',
    body: 'Body of post one',
    category: 'News',
    likes: 4,
    tags: ['news events'],
    user: {
        name: 'John',
        status: 'author'
    },
    data: Date()
});
//insert many to collection
db.posts.insertMany([
    {
        title: 'Post Two',
        body: 'Body of post two',
        category: 'Technology',
        date: Date()
    }, {
        title: 'Post Three',
        body: 'Body of post three',
        category: 'News',
        date: Date()
    }, {
        title: 'Post Four',
        body: 'Body of post four ',
        category: 'Entertainment',
        date: Date()
    }
]);
//find data
db.posts.find();
//find data with fine look
db.posts.find().pretty();
//find by property
db.posts.find({category: 'News'});
//sort
db.posts.find().sort({title: 1}).pretty();
//count
db.posts.find().count();
//limit
db.posts.find().limit(2);
//forEach collection properties
db.posts.find().forEach(function (doc) {
    print('Blog Post: ' + doc.title)
});
//forEach result:
// Blog Post: Post One
// Blog Post: Post Two
// Blog Post: Post Three
// Blog Post: Post Four

//find one property
db.posts.findOne({category: 'News'});

//update property
db.posts.update({title: 'Post Two'},
    {
        title: 'Post Two',
        body: 'New post 2 body',
        date: Date()
    },
    {
        upsert: true
    }
);

//set property
db.posts.update({title: 'Post Two'},
    {
        $set: {
            body: 'Body of post 2',
            category: 'Technology'
        }
    }
);

//increment property
db.posts.update({title: 'Post One'}, {$inc: {likes: 2}});

//rename
db.posts.update({title: 'Post One'}, {$rename: {likes: 'views'}});

//set comment
db.posts.update({title: 'Post Two'},
    {
        $set: {
            comments: [
                {
                   user: 'Mary Williams',
                   body: 'Comment One',
                   data: Date()
                },{
                    user: 'Harry White',
                    body: 'Comment Two',
                    data: Date()
                }
            ]
        }
    }
);

//find by comment
db.posts.find({
    comments: {
        $elemMatch: {
            user: 'Mary Williams'
        }
    }
}).pretty();

//create index of property
db.posts.createIndex({title: 'text'});

db.posts.find({
    $text: {
        $search: "\"Post 0\""
    }
}).pretty();

//greater then
db.posts.find({views: {$gt: 6}}).pretty()
