const express = require('express');
const app = express();
const port = 3000;
//몽고db 연결
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://dblight:asd123@bolierplate.sefdg.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB Connected..'))
  .catch((err) => console.log('DBerror : ' + err));

const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Hello World!dfafdafd');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
