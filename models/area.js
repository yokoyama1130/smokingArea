const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 喫煙所のスキーマ作成
const areaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    paper: Boolean,
    capacity: Number
});

// モデル名は単数形＋先頭大文字が基本
module.exports = mongoose.model("Area", areaSchema);