const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db");

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
        msg: "User created"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find();
    console.log(allCourses);
    
    res.json(allCourses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const userName = req.headers.username;

    await User.updateOne({
        username: userName,
    }, {
        "$push": {
            purchesedCourses: courseId
        }
        
    })
    res.status(200).json({
        msg: "Courses Purchased"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const userName = req.headers.username;
    const user = await User.findOne({
        username: userName
    });
    // console.log(user);
    // console.log(purchasedCoursesId);
    const course = await Course.find({
        _id: {
            "$in": user.purchesedCourses
        }
    })
    res.status(200).json({
        course: course
    })
});

module.exports = router