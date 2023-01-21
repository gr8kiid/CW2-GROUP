var express = require("express");
var app = express();

const port = 3000;

const lessons = [
    {
        topic: 'Math',
        location: 'Dubai',
        price: 100,
      },
      {
        topic: 'English',
        location: 'New York',
        price: 80,
      },
      {
        topic: 'Science',
        location: 'Amsterdam',
        price: 90,
      },
      {
        topic: 'Spanish',
        location: 'Africa',
        price: 120,
      },
]

const users = [
    {
        email: 'wambe@gmail.com',
        password: 'wambe123',
      },
]

app.get("/users",(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
});
    
app.get("/lessons",(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(lessons));
});

app.listen(3000, function() {
    console.log(`Server running on port http://localhost:${port}`);
});