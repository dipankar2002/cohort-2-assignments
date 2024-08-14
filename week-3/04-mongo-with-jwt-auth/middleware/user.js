const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config');
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const tokenArr = token.split(' ');
    const jwtToken = tokenArr[1];

    const decodeToken = jwt.verify(jwtToken,jwtPass);
    if(decodeToken.username) {
        next();
    } else {
        res.status(404).json({
            msg: "User Authorization Failed"
        });
    }
}

module.exports = userMiddleware;