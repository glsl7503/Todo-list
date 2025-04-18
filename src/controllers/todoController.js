const todoService = require("../services/todoService"); // 서비스 가져오기

const createTodo = async (req, res) => {
    const userId = req.session.userId;
    const { text } = req.body; // text는 req.body에서 가져와야 합니다.

    try {
        const result = await todoService.createTodoService(userId, text);

        if (!result.ok) {
            return res.json(result); // 실패한 결과를 그대로 반환
        }

        return res.json({ ok: true }); // 성공한 결과 반환
    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false, message: '서버 오류' });
    }
};

module.exports = {
    createTodo, // createTodo로 메서드명 수정
};
