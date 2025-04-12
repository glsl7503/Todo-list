const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/create', async (req, res) => {
    const userId = req.session.userId;
    const { text } = req.body;

    if (!userId) {
        return res.status(401).json({ ok: false, message: '로그인 필요' });
    }

    try {
        await Todo.create({ userId, text });
        return res.json({ ok: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false, message: '서버 오류' });
    }
});

module.exports = router;
