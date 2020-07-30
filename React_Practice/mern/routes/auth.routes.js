const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const UserModel = require('../models/user')

//api/auth/register
router.post('/register', [
        check('email', 'Incorrect email!').isEmail(),
        check('password', 'Minimum 6 symbols is required!').isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect register data!'
                });
            }
            const {email, password} = req.body;
            const candidate = await UserModel.findOne({email});

            if (candidate) {
                return res.status(400).json('User is already exist!');
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new UserModel({email, password: hashedPassword});

            await user.save();
            res.status(201).json({message: 'User has been created successfully!'})

        } catch (e) {
            res.status(500).json({message: 'Something goes wrong, try again pleas'})
        }
    })

//api/auth/login
router.post('/login', [
        check('email', 'Enter, pleas, a correct email').normalizeEmail().isEmail(),
        check('password', 'Enter password, pleas').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect login data!'
                });
            }

            const {email, password} = req.body;
            const user = await UserModel.findOne({email});

            if (!user) {
                return res.status(400).json({message: 'User not found'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Wrong password, try again, pleas'})
            }

            const token = jwt.sign({userId: user.id}, config.get('jwtSecret'));

            res.json({token, userId: user.id});

        } catch (e) {
            res.status(500).json({message: 'Something goes wrong, try again pleas'})
        }
    })


module.exports = router;