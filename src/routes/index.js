// 라우터 설정 index.js

const auth = require('./auth');
const todo = require('./todo');

module.exports = (app) => {
  app.use('/auth', auth);
  app.use('/todo', todo);
};