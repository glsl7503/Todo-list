const express = require('express');
const sessionConfig = require('../config/session');  // 세션 설정 파일 가져오기
const path = require('path');

const app = express();

// DB 연결
const connectDB = require('../config/db');
connectDB();

// 세션 미들웨어 사용
app.use(sessionConfig);

// 미들웨어 설정
app.use(express.json());

// 라우터 설정
app.use('/auth', require('../routes/auth'));
app.use('/todo', require('../routes/todo'));

// 정적 파일 제공 (public 폴더 사용)
app.use(express.static(path.join(__dirname, '../public')));

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// EJS 라우팅 설정
app.get('/', function(req, res) {
  res.render('index'); 
});

app.get('/todo', function(req, res) {
  res.render('todo'); 
});

app.get('/sign-in', (req, res) => {
  res.render('sign-in');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

// 서버 실행
app.listen(8080, function() {
  console.log('서버 실행중, 포트 8080');
});

