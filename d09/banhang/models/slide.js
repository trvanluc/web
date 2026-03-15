const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({
    imageSlide: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Slide", slideSchema);
