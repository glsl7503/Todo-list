const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/todo', async (req, res) => {
    const { userId, text } = req.body;

    try {
        const userCheck = await Todo.findOne({ userId });

        if (!userCheck) {
            return res.json({ ok: false, message: '존재하지 않는 아이디' });
        }

        await Todo.create({ userId, text });

        return res.json({ ok: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false, message: '서버 오류' });
    }
});

module.exports = router;
