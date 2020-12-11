const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Resen&appid=760e7372eccbfd6a68850025bdda80bc&units=metric";

    https.get(url, function (resp) {
        console.log(resp.statusCode);

        resp.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const weatherTemp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
        })
    })
    res.send("Server is Running Right Now.");
})


app.listen(3000, function () {
    console.log("Server on hosting on port 3000");
})