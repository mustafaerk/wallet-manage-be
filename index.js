const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors')

const app = express()
const port = 3000;

const categoryRoute = require("./src/route/categoryRoute");
const moneyRoute = require("./src/route/moneyRoute");

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

/* DB connection */
mongoose.connect("mongodb+srv://mstf:1aT3HJu2eHwU24H2@cluster0.pydk1.mongodb.net/wallet-chain?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

/* -------------- */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(categoryRoute);
app.use(moneyRoute);