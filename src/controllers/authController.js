const authService = require('../services/authService');  // 서비스 호출

// 로그인 처리
const login = async (req, res) => {
    const { userId, password } = req.body;

    try {
        const result = await authService.loginService(userId, password);

        if (!result.ok) {
            return res.json(result);  // 실패한 메시지 반환
        }

        // 로그인 성공
        req.session.userId = userId;
        res.json({ ok: true, userId: result.userId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: '서버 오류' });
    }
};

module.exports = {
    login,
};
