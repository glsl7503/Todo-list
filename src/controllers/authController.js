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

/**
 * [회원가입] 기능
 * @param {*} req userId, password, confirmPwd
 * @param {*} res 
 */
const signUp = async (req, res) => {
    const { userId, password, confirmPwd} = req.body;

    try {
        const result = await authService.signUpService(userId, password, confirmPwd);
        return res.json(result)
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: '서버 오류' });
    }
}

/**
 * [로그아웃]
 */
const logout = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
        return res.status(500).json({ ok: false, message: '로그아웃 실패' });
        }
        res.clearCookie('connect.sid');
        res.json({ ok: true, message: '로그아웃 완료' });
    });
};

module.exports = {
    login,
    signUp,
    logout
};
