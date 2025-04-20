const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');  // 컨트롤러 호출

// 할 일 생성
router.post('/create', todoController.createTodo);

// 할 일 목록 조회
router.get('/get', todoController.getTodos);

module.exports = router;
