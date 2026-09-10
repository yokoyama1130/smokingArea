const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.listen(3001, () => {
    console.log("ポート3001でサーバー起動");
});