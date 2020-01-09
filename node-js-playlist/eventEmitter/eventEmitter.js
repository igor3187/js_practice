const event = require('events');
const util = require('util');

let Person = function (name) {
  this.name = name;
};

util.inherits(Person, event.EventEmitter);

let james = new Person('James');
let mary = new Person('Mary');
let ruy = new Person('Ruy');

const people = [james, mary, ruy];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'hey dudes');
ruy.emit('speak', 'i want a curry');
