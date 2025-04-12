const mongoose = require('mongoose');

// MongoDB 연결 함수
const connectDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => console.log('MongoDB 연결 완료'))
  .catch(err => console.error('MongoDB 연결 실패:', err));
};

// connectDB 함수를 내보냄
module.exports = connectDB;
