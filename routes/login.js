// Express 라우터 인스턴스 생성 (모듈화된 라우팅 가능)
const express = require('express');
const router = express.Router();

// MongoDB User 모델 불러옴
const User = require('../models/User'); // 모델 불러오기

// 로그인 처리
router.post('/login', async (req, res) => {
    // 구조 분해 할당 문법 (Destructuring)
    const { userId, password } = req.body;

    try {
        const user = await User.findOne({ userId });

        if (!user) {
            return res.json({ ok: false, message: '존재하지 않는 아이디' });
        }

        if (user.password !== password) {
            return res.json({ ok: false, message: '비밀번호 틀림' });
        }

        // 로그인 성공
        res.json({ ok: true, userId: user._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: '서버 오류' });
    }
});

module.exports = router;
