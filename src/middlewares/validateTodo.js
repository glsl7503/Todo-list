const checkSession = (req, res, next) => {
    const userId = req.session.userId;
    if (!userId) {
        return res.status(400).json({ok: false, message: "세션이 존재하지 않습니다."});
    }

    next();
}

const checkText = (req, res, next) => {
    const { text } = req.body;
    if (!text || text.trim() === "") {
        return res.status(400).json({ ok: false, message: "텍스트는 필수입니다." });
    }

    next();
}

module.exports = {
    checkSession,
    checkText
}