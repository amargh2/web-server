const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path')




const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(content)
    })
  } if (req.url === '/about') {
    console.log('any chimp can play human for a day')
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text, html'})
      res.end(content)
    })
  } if (req.url === '/contact') {
    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type':'text/html'})
      res.end(content)
    })
  } else {
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
      if (err) throw err
      res.writeHead(200, {'Content-Type':'text/html'})
      res.end(content)
    })
  }
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {console.log(`the server is running on port ${PORT}`)})