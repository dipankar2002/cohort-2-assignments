const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index');
const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const userName = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: userName,
        password: password
    });
    res.status(200).json({ 
        msg: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const searchRes = await Admin.find({
        username,
        password,
    })
    if(searchRes) {
        const token = jwt.sign({username},jwtPass);
        res.status(200).json({
            jwt: token
        })
    } else {
        res.status(404).json({ 
            msg: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const course = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.status(200).json({
        msg: `course created. courseId: ${course._id}`
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find();

    res.json({
        courses: allCourses
    });
});

module.exports = router;