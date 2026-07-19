const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcryptjs");

const app = express();

const PORT = process.env.PORT || 10000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// MongoDB
mongoose.connect(MONGODB_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    balance: {
        type: Number,
        default: 0
    },
    referrals: {
        type: Number,
        default: 0
    },
    referralCode: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// SIGNUP
app.post("/signup", async (req, res) => {

    try {

        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(400).json({
                message: "Email already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            fullname,
            email,
            password: hashedPassword,
            referralCode: Math.random().toString(36).substring(2,8).toUpperCase()
        });

        await user.save();

        res.json({
            message: "Account created successfully!"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server error."
        });

    }

});
