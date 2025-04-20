const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // 컨트롤러 데이터 전달
const validateAuth = require('../middlewares/validateAuth');   // 미들웨어 유효성 검사 

// 로그인 처리
router.post('/login', validateAuth.login, authController.login);

// 회원가입 처리
router.post('/signUp', validateAuth.signUp, authController.signUp);

// 로그아웃 처리
router.get('/logout', authController.logout);

module.exports = router;
