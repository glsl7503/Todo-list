const session = require("express-session");

// 세션 미들웨어 설정
module.exports = session({
    secret: 'your-secret-key', // 비밀 키
    resave: false,  // 세션이 수정되지 않으면 세션을 다시 저장하지 않음
    saveUninitialized: true, // 초기화되지 않은 세션도 저장
    cookie: { secure: false, httpOnly: true, maxAge: 3600000 }, // 쿠키 설정 (보안 및 만료 시간 설정)
  });