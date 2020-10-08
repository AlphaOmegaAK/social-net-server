const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');


//! ----- Auth Register  -----
// @ Register api/v1/auth/register
// @ Access Public
const register = async (req, res) => {
    console.log("Register Route", req.body);
    if (!req.body.username || !req, body.email || req.body.password || req.body.firstName) {
        return res.status(400).json({
            message: "All fields must be filled for Registration. Please try again."
        })
    }
    if (req.body.password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long."
        })
    }
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email
        });
        if (foundUser) {
            res.status(400).json({
                status: 400,
                message: "Already an account with this Email. Please try again."
            })
        }
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(req.body.password, salt);

        await db.User.create({
            ...req.body,
            password: hash
        });

        return res.status(201).json({
            status: 201,
            message: "Successfully created Account"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: "We are sorry, something went wrong. Please try again."
        });
    }
};


//! ----- Auth Login  -----
// @ Register api/v1/auth/Login
// @ Access Public

const login = (req, res) => {
    console.log(req.body);

    try {
        const foundUser = await db.User.findOne({
            email: req.body.email
        });

        if (!foundUser) {
            return res.status(400).json({
                status: 400,
                message: "Email, or Password are incorrect"
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        if (!isMatch) {
            return res.status(400).json({
                status: 400,
                message: "Password is incorrect."
            });
        }
        const payload = {
            id: foundUser._id
        };
        const secret = process.env.JWT_SECRET;
        const expiration = {
            expiresIn: "1h"
        };

        const token = await jwt.sign(payload, secret, expiration);
        res.status(200).json({ token });

    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong with Login.\n Please Try Again"
        });
    }
};

const verify = (req, res, next) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser) {
            return res.status(401).json({
                message: "You Shall Not Pass!"
            });
        }
        req.currentUser = decodedUser;
        res.status(200).json({ user: decodedUser })
        next()
    });
};

module.exports = {
    register,
    login, 
    verify
}