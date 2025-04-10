const express = require('express');
const path = require('path');
const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공 (public 폴더 사용)
app.use(express.static(path.join(__dirname, '../public'))); // public 폴더에 있는 CSS, JS 파일 등 제공

// 서버 실행, 8080번 포트에서 대기
app.listen(8080, function() {
    console.log('Listening on port 8080');
});

app.get('/', function(req, res) {
    res.render('index'); // EJS 템플릿 파일 렌더링
});

app.get('/todo', function(req, res) {
    res.render('todo'); 
});

app.get('/sign-in', (req, res) => {
    res.render('sign-in');
});

app.get('/sign-up', (req, res) => {
    res.render('sign-up');
})