const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Kết nối MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/banhang")
.then(() => console.log("MongoDB Connected!"))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // để load ảnh tĩnh

// Gọi model
const Slide = require("./models/slide");

// Set EJS làm view engine
app.set("view engine", "ejs");

// Trang chủ: lấy dữ liệu slide từ DB
app.get("/", async (req, res) => {
    try {
        const slides = await Slide.find();
        res.render("index", { slides: slides });
    } catch (err) {
        res.send(err);
    }
});

// Server chạy cổng 3000
app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});

