const express = require("express");
const app = express();
const path = require("path");
const Area = require("./models/area");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smokingArea')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch((err) => {
        console.error("コネクションエラー");
        console.error(err);
    });

// viewエンジンはejsを使ってね
app.set("view engine", "ejs");
// どこからサーバー起動しても大丈夫なようにパスを指定
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const areas = await Area.find({});
    res.render("index", { areas });
});

app.listen(3001, () => {
    console.log("ポート3001でサーバー起動");
});