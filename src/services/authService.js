const User = require('../models/User');  // 모델 호출

// 로그인 서비스
const loginService = async (userId, password) => {
    try {
        const user = await User.findOne({ userId });

        if (!user) {
            return { ok: false, message: '존재하지 않는 아이디 입니다.' };
        }

        if (user.password !== password) {
            return { ok: false, message: '패스워드를 확인 해주세요.' };
        }

        return { ok: true, userId: user._id };
    } catch (err) {
        console.error(err);
        throw new Error('서버 오류');
    }
};

module.exports = {
    loginService,
};
