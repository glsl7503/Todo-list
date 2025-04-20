const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');  // 컨트롤러 호출
const validateTodo = require('../middlewares/validateTodo'); // 유효성 검사

// 할 일 생성
router.post('/create', validateTodo.checkSession, validateTodo.checkText, todoController.createTodo);

// 할 일 목록 조회
router.get('/get',  validateTodo.checkSession, todoController.getTodos);

module.exports = router;