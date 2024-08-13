// Middleware for handling auth
const { Admin } = require('../db/index');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.username;
    const pass = req.headers.password;

    const value = await Admin.findOne({
        username: userName,
        password: pass
    })
    if(value) {
        next();
    } else {
        res.status(404).json({
            msg: "lol Admin not found"
        })
    }
}

module.exports = adminMiddleware;