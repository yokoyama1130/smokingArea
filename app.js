const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smokingArea')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch((err) => {
        console.error("コネクションエラー");
        console.error(err);
    });

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.listen(3001, () => {
    console.log("ポート3001でサーバー起動");
});