// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static('public'));

// 主页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
