// const asyncHandler = require("express-async-handler")
// const jwt = require("jsonwebtoken")

// const validateToken = asyncHandler(async(req,res,next)=>{
//     const authHeader = req.header('Authorization');
    
//     if (!authHeader) {
//         return res.status(401).json({ errorMessage: 'Authorization header missing.' });
//     }
    
//     const token = authHeader.replace('Bearer ', '');

//     if (!token) {
//         return res.status(401).json({ errorMessage: 'Token missing from Authorization header.' });
//     }
    
//     jwt.verify(token , process.env.JWT_SECRET_KEY, (err,decoded)=>{
//         if(err){
//             return res.status(401).json({errorMessage:err.message});
//         }
//         console.log(decoded)
//     })
//     next();
// });

// module.exports = validateToken

const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const validateToken = asyncHandler(async (req, res, next) => {
    // Extract the token from the Authorization header
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
        return res.status(401).json({ errorMessage: 'Authorization header missing.' });
    }
    
    const token = authHeader.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ errorMessage: 'Token missing from Authorization header.' });
    }
    
    try {
        // Verify the token using the secret key from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded.user;
        console.log(`decoded is `,decoded); // For debugging purposes
        next();
    } catch (err) {
        res.status(401).json({ errorMessage: 'Invalid or expired token.' });
    }
});

module.exports = validateToken;
