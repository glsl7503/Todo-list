const checkSession = (req, res, next) => {
    const userId = req.session.userId;
    if (!userId) {
        return res.redirect('/sign-in');
    }

    next();
}

const checkText = (req, res, next) => {
    const { text } = req.body;
    if (!text || text.trim() === "") {
        return res.status(400).json({ ok: false, message: "Text is required." });
    }

    next();
}

module.exports = {
    checkSession,
    checkText
}