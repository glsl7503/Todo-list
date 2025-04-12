const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // 컨트롤러 호출

// 로그인 처리
router.post('/login', authController.login);

module.exports = router;
