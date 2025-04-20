const Todo = require("../models/Todo");

const getTodoService = async (userId) => {
    try {
        const data = await Todo.find({ userId });
        console.log(data);

        return {ok: true, data, message: '조회 성공'};
    } catch (err) {
        console.error(err);
        return { ok: false, message: 'TO-DO 조회 기능 오류' }; // 오류 메시지 반환
    }
};

const createTodoService = async (userId, text) => {
    if (!userId) {
        return { ok: false, message: '로그인 필요' }; // 로그인 필요 메시지 반환
    }

    try {
        await Todo.create({ userId, text }); // Todo 생성
        return { ok: true }; // 성공 시 성공 메시지 반환
    } catch (err) {
        console.error(err);
        return { ok: false, message: 'TO-DO 등록 기능 오류' }; // 오류 메시지 반환
    }
};

module.exports = {
    getTodoService,
    createTodoService
};
