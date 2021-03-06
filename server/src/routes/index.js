const express = require('express');
const docRoutes = require('./docs.route');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const courseRoutes = require('./course.route');
const homeRoutes = require('./home.route');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/home', homeRoutes);
router.use('/docs', docRoutes);
router.use('/courses', courseRoutes);

module.exports = router;
