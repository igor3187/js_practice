const bodyParser = require('body-parser');

let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {

    app.get('/todo', (req, res) => res.render('todo', {todos: data}));

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
        res.json(data);
    });

};
