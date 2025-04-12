const Todo = require("../models/Todo");

const createTodoService = async (userId, text) => {
    if (!userId) {
        return { ok: false, message: '로그인 필요' }; // 로그인 필요 메시지 반환
    }

    try {
        await Todo.create({ userId, text }); // Todo 생성
        return { ok: true }; // 성공 시 성공 메시지 반환
    } catch (err) {
        console.error(err);
        return { ok: false, message: '서버 오류' }; // 오류 메시지 반환
    }
};

module.exports = {
    createTodoService, // 메서드명 수정
};
