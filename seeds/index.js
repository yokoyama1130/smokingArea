const mongoose = require("mongoose");
const Area = require("../models/area");

mongoose.connect("mongodb://localhost:27017/smokingArea")
    .then(() => {
        console.log("MongoDB接続OK");
    })
    .catch((err) => {
        console.log("MongoDB接続エラー");
        console.log(err);
    });

const areas = [
    {
        name: "秋田駅西口喫煙所",
        location: "秋田駅西口",
        paper: true,
        capacity: 10
    },
    {
        name: "秋田駅東口喫煙所",
        location: "秋田駅東口",
        paper: true,
        capacity: 8
    },
    {
        name: "千秋公園前喫煙所",
        location: "千秋公園入口付近",
        paper: false,
        capacity: 5
    },
    {
        name: "広小路喫煙所",
        location: "広小路商店街付近",
        paper: true,
        capacity: 12
    },
    {
        name: "中通喫煙スペース",
        location: "秋田市中通",
        paper: true,
        capacity: 6
    },
    {
        name: "山王喫煙所",
        location: "秋田市山王",
        paper: false,
        capacity: 4
    }
];

const seedDB = async () => {
    await Area.deleteMany({});
    await Area.insertMany(areas);

    console.log("seedデータを追加しました！");
};

seedDB()
    .then(() => {
        mongoose.connection.close();
    });