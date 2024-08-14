// Middleware for handling auth
const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const tokenArr = token.split(' ');
    const jwtToken = tokenArr[1];

    const decodeToken = jwt.verify(jwtToken,jwtPass);
    console.log(decodeToken.username);
    
    if(decodeToken.username) {
        next();
    } else {
        res.status(404).json({
            msg: "Admin Authorization Failed"
        });
    }
}

module.exports = adminMiddleware;