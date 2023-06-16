//필요한 모듈과 변수를 초기화
const express = require('express')
const app = express()

//서버 요청 핸들러를 설정
app.get('/', function (req, res) {
res.send('Hello World')
})
app.get('/dog', function (req, res) {
res.send('멍멍')
})
app.get('/cat', function (req, res) {
res.send('야옹')
})

//서버 시작
app.listen(3000)
