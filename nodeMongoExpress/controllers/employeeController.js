const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) =>
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    })
);

router.post('/', (req, res) => {
        if (req.body._id === '')
            insertRecord(req, res);
        else
            updateRecord(req, res);
    }
);

let insertRecord = (req, res) => {
    let employee = new Employee();

    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;

    employee.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');
        } else {
            if (err.name === 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "Insert Employee",
                    employee: req.body
                });
            } else
                console.log('Error during record insertion: ' + err);
        }
    });
};

function updateRecord(req, res) {
    Employee.findByIdAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if (!err) {
            res.redirect('employee/list');
        } else {
            if (err.name === 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addOrderEdit", {
                    viewTitle: 'Update Employee',
                    employee: req.body
                });
            } else
                console.log('Error during record update: ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("employee/list", {
                list: docs
            });
        } else
            console.log('Error in retrieving employee list: ' + err);
    })
});

function handleValidationError(err, body) {
    for (let field in err.errors) {
        switch (err.errors) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['email'] = err.err[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/list');
        } else {
            console.log('Error in employee delete :' + err);
        }
    });
});

module.exports = router;