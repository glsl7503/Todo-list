const login = (req, res, next) => {
    const { userId, password } = req.body;

    if (!userId || !password) {
        return res.status(400).json({ ok: false, message: '모든 값을 입력해주세요.'});
    }

    next();
};


const signUp = (req, res, next) => {
    const { userId, password, confirmPwd } = req.body;

    if (!userId || !password || !confirmPwd) {
        return res.status(400).json({ ok: false, message: '모든 값을 입력해주세요.' });
    }

    if (password !== confirmPwd) {
        return res.status(400).json({ ok: false, message: '비밀번호가 일치하지 않습니다.' });
    }
    next();
};

module.exports = {
    login,
    signUp
};
