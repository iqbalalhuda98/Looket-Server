const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// router
const categoriesRouter = require("./app/api/v1/categories/router");

const v1 = "/api/v1/cms";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Server Looket",
    });
});

app.use(v1, categoriesRouter);

module.exports = app;