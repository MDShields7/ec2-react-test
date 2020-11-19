const express = require("express");
const app = express();

var http = require("http").createServer(app);
var io = require("socket.io")(http, {
    origins: ["http://18.188.46.182/"],
  
    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "http://18.188.46.182/",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "my-custom-header",
        "Access-Control-Allow-Credentials": true
      });
      res.end();
    }
  });
const path = require("path");

app.use(express.static(`${__dirname}/../build`));

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

io.on("connection", (socket) => {
  console.log('welcome user');
  io.emit("welcome", "welcome" );

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(5000, () => {
  console.log("listening on *:5000");
});
