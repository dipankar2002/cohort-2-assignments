const { User } = require('../db/index');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userName = req.headers.username;
    const pass = req.headers.password;

    const value = await User.findOne({
        username: userName,
        password: pass
    })
    if(value) {
        next();
    } else {
        res.status(404).json({
            msg: "lol User not found"
        })
    }
}

module.exports = userMiddleware;