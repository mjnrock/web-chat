import express from "express";
import fs from "fs";

const APP = express();
const PORT = 3001;

APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
APP.use(express.raw());

APP.get("/feed", (req, res) => {
    // "/feed/:feedId"
    // req.params.feedId
    fs.readFile("./data/messages.json", function (err, buf) {
        return res.send(buf.toString());
    });
});
APP.post("/message/", (req, res) => {
    const filepath = "./data/messages.json";
    const message = req.body;

    console.log(message);

    fs.readFile(filepath, "utf8", function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            obj.push(message);

            let json = JSON.stringify(obj);
            fs.writeFile(filepath, json, () => {
                res.sendStatus(200);
            });
        }
    });
});

APP.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);