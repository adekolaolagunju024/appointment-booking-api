const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Yomi\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*C:\Users\Dell\Desktop\BACKEND LESSONS>cd appointment-app

C:\Users\Dell\Desktop\BACKEND LESSONS\appointment-app>code .

C:\Users\Dell\Desktop\BACKEND LESSONS\appointment-app>
*/