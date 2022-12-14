const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

const v1 = "/api/v1/cms";

// import router
const categoriesRouter = require("./app/api/v1/categories/router");
const imagesRouter = require("./app/api/v1/images/router");
const talentsRouter = require("./app/api/v1/talents/router");
const eventsRouter = require("./app/api/v1/events/router");

// import middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Server Looket",
  });
});

// gunakan router
app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);
app.use(v1, eventsRouter);

// gunakan middlewares (harus berada dibawah router)
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
