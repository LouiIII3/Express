//필요한 모듈과 변수를 초기화
const express = require('express');
const app = express();
const port = 8010;
const bodyParser = require('body-parser');

//서버요청 핸들러 설정
app.get('/', function(req, res) {
  // GET 요청 처리 작업
  res.send("get 요청에 따라 동작합니다.");
});

app.post('/hosil', function (req, res) {
  // POST 요청 처리 작업
});

//POST 요청의 처리 작업을 구현
app.post('/', function (req, res) {
  if (req.body["h_sound1"] != null) {
    // 요청 데이터 확인 및 처리 작업
  } else {
    // 오류 처리 작업
  }

  // 응답 전송
  res.send(data_h);
});

//서버 시작
app.listen(port, () => {
  console.log(`웹 서버가 ${port}포트로 실행 중입니다.`);
});
