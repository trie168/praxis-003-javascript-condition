const express = require("express");
const app = express();
const conditi = require("./lib/conditional");
const task_condition = require("./lib/task");

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send(`Welcome to the jungle`);
});

/**
 * How to using query parameter:
 *
 * http://your_url:your_port/your_route?q=your_value
 * or type in Query Params when using postman
 * key      | value
 * q        | your_value
 */
app.get("/task1", (req, res) => {
    let q = req.query.q;
    console.log("First value ", q);

    let result = conditi.equal(q);

    return res.send(result);
});

app.get("/task2", (req, res) => {
    let today = new Date().getDay();
    console.log("Today ", today);

    let result = conditi.day(today);

    return res.send(result);
});

app.post("/task3", (req, res) => {
    let number = req.body.number;
    console.log("section1 ", typeof number);
    number = parseInt(number);
    console.log("section2 ", typeof number);

    let result = conditi.compare(number);

    return res.send(result);
});

app.get("/task4", (req, res) => {
    let key1 = req.query.key1;
    console.log("Is key1 ", key1);
    let key2 = req.query.key2;
    console.log("Is key2 ", key2);
    let result = task_condition.task1(key1, key2);

    return res.send(result);
});

app.post("/task5", (req, res) => {
    let { name, email } = req.body;
    console.log("Is Name", name);
    console.log("Is Email", email);

    let result = task_condition.task2(name, email);

    return res.send(result);
});

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`);
});
