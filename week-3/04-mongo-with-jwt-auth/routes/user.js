const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');
const jwt = require('jsonwebtoken');
const {jwtPass} = require('../config');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const userName = req.body.username;
    const password = req.body.password;

    await User.create({
        username: userName,
        password: password
    });
    res.status(200).json({ 
        msg: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const searchRes = await User.find({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find();

    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;

    const tokenArr = token.split(' ');
    const jwtToken = tokenArr[1];

    const decodeToken = jwt.verify(jwtToken,jwtPass);
    const username = decodeToken.username;

    await User.updateOne({
        username: username,
    }, {
        "$push" : {
            purchasedCourses: courseId
        }
    })
    res.status(200).json({
        msg: "Courses Purchased"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;

    const tokenArr = token.split(' ');
    const jwtToken = tokenArr[1];

    const decodeToken = jwt.verify(jwtToken,jwtPass);
    const username = decodeToken.username;
    console.log(username);
    

    const userData = await User.findOne({
        username: username
    });

    // console.log(userData);
    // console.log(userData.purchasedCoursesId);

    const course = await Course.find({
        _id: {
            "$in": userData.purchasedCourses
        }
    })
    res.status(200).json({
        course: course
    })
});

module.exports = router