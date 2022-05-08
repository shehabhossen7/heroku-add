const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/user", (req, res) => {
  res.send("this is users section");
});

const users = [
  { id: 1, name: " samima", email: "name@gmail.com", age: "45" },
  { id: 2, name: " samim", email: "name@gmail.com", age: "42" },
  { id: 3, name: " samiul", email: "name@gmail.com", age: "25" },
  { id: 4, name: " samsul", email: "name@gmail.com", age: "65" },
  { id: 5, name: " salman", email: "name@gmail.com", age: "44" },
  { id: 6, name: " salam", email: "name@gmail.com", age: "35" },
  { id: 7, name: " saikot", email: "name@gmail.com", age: "21" },
  { id: 8, name: " sakil", email: "name@gmail.com", age: "18" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log("connected", port);
});
