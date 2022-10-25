const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let talentSchema = Schema({
    name: {
        type: String,
        required: [true, "Nama harus diisi"],
    },
    role: {
        type: String,
        default: "-",
    },
    image: {
        type: mongoose.Types.ObjectId, // untuk membuat relasi pada mongodb kita perlu membuat types ObjectId
        ref: "Image", // harus sama dengan nama model pada images model
        required: true,
    },
}, { timestamps: true });

module.exports = model("Talent", talentSchema);