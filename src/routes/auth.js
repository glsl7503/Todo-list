const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // 컨트롤러 호출

// 로그인 처리
router.post('/login', authController.login);

// 회원가입 처리
router.post('/signUp', authController.signUp)

module.exports = router;
