const express = require('express');
const router = express.Router();

const authController = require('../controllers/authConstroller');

router.get('/', authController.auth_test_get);

module.exports = router;