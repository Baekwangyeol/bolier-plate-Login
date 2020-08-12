const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true, //trim kwang yeol200@naver.com 이런경우 스페이스없애주는것
    unique: 1, // 독보적인것 하나만있어야하는것
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: number,
    default: 0, //롤을 넣는이유 레벨지정(회원관리) ,default는 안줬을때0주는것
  },
  image: {
    String,
  },
  token: {
    type: String, //유효성(자격) ,로그인을 했는지안했는지체크
  },
  tokenExp: {
    type: Number,
    //token 유효기간
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
