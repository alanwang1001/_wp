const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('一位使用者連線');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('使用者離線');
  });
});

http.listen(3000, () => {
  console.log('聊天室伺服器運作中： http://localhost:3000');
});
