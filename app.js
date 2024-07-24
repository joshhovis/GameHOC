const express = require("express");
const res = require("express/lib/response");
const methodOverride = require("method-override");
const session = require("express-session");
const gamesController = require("./controllers/games");
const collectionsController = require("./controllers/collections");
const usersController = require("./controllers/users");
const User = require("./models/User");
const moment = require("moment");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

/*********************************/
/*        Mongoose Config        */
/*********************************/
const mongoose = require("mongoose");
const mongoUri =
    process.env.NODE_ENV === "production"
        ? process.env.MONGODB_URI_PRODUCTION
        : process.env.MONGODB_URI_LOCAL;

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

/************************/
/*        Config        */
/************************/
app.set("view engine", "ejs");
app.locals.moment = require("moment");

/****************************/
/*        Middleware        */
/****************************/
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

/*****************************/
/*        Controllers        */
/*****************************/

app.use("/games", gamesController);
app.use("/collections", collectionsController);
app.use("/auth", usersController);

/****************************/
/*        Home Route        */
/****************************/

const query =
    "https://api.rawg.io/api/games?key=b37c07aab35b44058235af257c65be19&ordering=-rating&metacritic=50,100";
const query2 =
    "https://api.rawg.io/api/games?key=b37c07aab35b44058235af257c65be19&ordering=-released&dates=2021-01-27," +
    moment().format("YYYY-MM-DD") +
    "&metacritic=50,100";

app.get("/", (req, res) => {
    fetch(query).then((response) => {
        response
            .json()
            .then((data) => {
                topRated = data.results;
            })
            .then(() => {
                fetch(query2).then((response2) => {
                    response2.json().then((data2) => {
                        newReleases = data2.results;
                        res.render("home.ejs", {
                            topRated: topRated,
                            newReleases: newReleases,
                            user: req.session.currentUser,
                        });
                    });
                });
            });
    });
});

/*****************************/
/*        Login Route        */
/*****************************/
app.get("/login", (req, res) => {
    res.render("users/login.ejs", {
        user: req.session.currentUser,
    });
});

/******************************/
/*        Signup Route        */
/******************************/
app.get("/signup", (req, res) => {
    res.render("users/signup.ejs", {
        user: req.session.currentUser,
    });
});

/*******************************************/
/*        Login/Signup Prompt Route        */
/*******************************************/
app.get("/prompt", (req, res) => {
    res.render("users/prompt.ejs", {
        user: req.session.currentUser,
    });
});

/****************************/
/*        Server Init       */
/****************************/
app.listen(PORT, () => console.log("Listening on port:", PORT));
