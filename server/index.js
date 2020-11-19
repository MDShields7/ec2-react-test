const express = require("express");
const app = express();
const path = require("path");
var http = require("http").createServer(app);
var io = require("socket.io")(http);

http.listen(5000, () => {
    console.log("listening on *:5000");
  });

app.use(express.static(`${__dirname}/../build`));

// app.use(express.static(path.join(__dirname, '../build/')));

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

