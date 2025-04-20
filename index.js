const express = require('express');
const sessionConfig = require('./src/config/session');  // 세션 설정 파일 가져오기
const path = require('path');

const app = express();

// DB 연결
const connectDB = require('./src/config/db');
connectDB();

// 세션 설정
app.use(sessionConfig);

// 런타임 설정
app.use(express.json());

// 라우터 설정
require('./src/routes')(app);

// 정적 파일 제공 (public 폴더 사용)
app.use(express.static(path.join(__dirname, 'public')));

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// EJS 라우팅 설정
app.get('/', (req, res) => {
  res.render('index', { currentPath: '/' });
});

app.get('/todo', (req, res) => {
  res.render('todo/todo', { currentPath: '/todo' });
});

app.get('/sign-in', (req, res) => {
  res.render('auth/sign-in', { currentPath: '/sign-in' });
});

app.get('/sign-up', (req, res) => {
  res.render('auth/sign-up', { currentPath: '/sign-up' });
});

// 서버 실행
app.listen(8080, function() {
  console.log('서버 실행중, 포트 8080');
});

