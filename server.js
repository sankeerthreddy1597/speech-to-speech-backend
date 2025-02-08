require("dotenv").config();
const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 5001;

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());
    ws.send("Hello from server!");
  });

  ws.on("close", () => console.log("Client disconnected"));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
