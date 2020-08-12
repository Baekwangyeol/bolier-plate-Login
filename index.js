const express = require('express');
const app = express();
const port = 3000;

const config = require('./config/key');

const { User } = require('./models/User');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//몽고db 연결
const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected..'))
  .catch((err) => console.log('DBerror : ' + err));

app.get('/', (req, res) => {
  res.send('Hello World!dfafdafd');
});

app.post('/register', (req, res) => {
  //회원가입 정보들을 clint에서 가져오면
  //그것들을 db에 저장한다.

  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
