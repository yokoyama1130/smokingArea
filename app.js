const express = require("express");
const app = express();
const path = require("path");
const Area = require("./models/area");
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const { resolveSoa } = require("dns");
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

// 一覧画面へのルーティング
app.get("/", async (req, res) => {
    const areas = await Area.find({});
    res.render("index", { areas });
});

// 新規登録画面へのルーティング
app.get("/areas/new", (req, res) => {
    res.render("new");
});

// 新規登録のルーティング
app.post("/areas/new", async (req, res) => {
    const area = new Area({
        name: req.body.area.name,
        location: req.body.area.location
    });
    await area.save();
    res.redirect(`/areas/${area._id}`);
});

// 詳細画面へのルーティング
app.get("/areas/:id", async (req, res) => {
    const id = req.params.id;
    const area = await Area.findById(id);
    res.render("show", { area });
});

// 編集画面へのルーティング
app.get("/areas/:id/edit", async (req, res) => {
    const id = req.params.id;
    const area = await Area.findById(id);
    res.render("edit", { area });
});

app.listen(3001, () => {
    console.log("ポート3001でサーバー起動");
});