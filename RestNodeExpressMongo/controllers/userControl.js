const UserModel = require('../models/UserModel');

module.exports = {
    create: (req, res) => {
        let user = new UserModel({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team
        });

        user.save()
            .then(result => {

            })
    }
};
