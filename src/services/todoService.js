const Todo = require("../models/Todo");

const getTodoService = async (userId) => {
    try {
        const data = await Todo.find({ userId });
        return {ok: true, data, message: '조회 성공'};
    } catch (err) {
        return { ok: false, message: 'TO-DO 조회 기능 오류' };
    }
};

const createTodoService = async (userId, text) => {
    try {
        await Todo.create({ userId, text });
        return { ok: true };
    } catch (err) {
        return { ok: false, message: 'TO-DO 등록 기능 오류' };
    }
};

module.exports = {
    getTodoService,
    createTodoService
};
