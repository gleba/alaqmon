import { dynamique } from "./storage";
//
const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');
//
app.listen(8778);
//
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }
      res.writeHead(200);
      res.end(data);
    });
}
io.on('connection', function (ws) {
  console.log("connected")
  switch (ws.handshake.query.ctx) {
    case "app":
      dynamique.AppController.create(ws)
      break
    default:
      dynamique.ViewerController.create(ws)
      break
  }
});


