const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/*
@desc register a use
@route Post /users/register
@access public
*/
const registerUser = async (req, res) => {
    const {username,email,password}=req.body

    if(!username || !email || !password){
        return res.status(400).json({ errorMessage: 'All fields are required.'});
    }

    try {
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            return res.status(400).json({ errorMessage: 'Email is already registered.' });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashed password: ",hashedPassword)

        const user = new User({username,email,password:hashedPassword})
        const savedUser = await user.save()
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

/*
@desc login user
@route Post /users/login
@access public
*/
const loginUser = async (req, res) => {
    const {email,password}= req.body;
    if(!email || !password ){
        return res.status(400).json({ errorMessage: 'Email and password fields are required.'});
    }

    try {
        const user = await User.findOne({email})
        const validPassword = await bcrypt.compare(password,user.password)

        // Generate a JWT
        if(user && validPassword){
            const accessToken = jwt.sign(
                {user: {
                    id:user.id,
                    username:user.username,
                    email:user.email
                    }
                },process.env.JWT_SECRET_KEY,
                { expiresIn : "30m" }
            )
            res.status(201).json({accessToken})
        }
        console.log("everything is ok. ;)")
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

/*
@desc current User
@route Post /users/current
@access private
*/
const currentUser = async (req, res) => {
    try {
        res.json(req.user);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    currentUser
}