const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin, Course } = require("../db");

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
        msg: "Admin created"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    
    res.status(200).json({
        msg: `course created. courseId: ${newCourse._id}`
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find();
    console.log(allCourses);
    
    res.json(allCourses);
});

module.exports = router;