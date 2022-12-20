const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req,res) => {
  let content;
  if (req.url === '/') {
    content = fs.readFileSync('index.html');
  } else if (req.url === '/about') {
    content = fs.readFileSync('about.html');
  } else if (req.url === '/contact-me'){
    content = fs.readFileSync('contact-me.html');
  } else if (req.url === '/index.css') {
    content = fs.readFileSync('index.css');
  } else {
    content = fs.readFileSync('404.html')
  }
  res.end(content);
});

server.listen(PORT);
