const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: name, email or password"
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "The email address provided is invalid."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already in use"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: passwordHash
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: email or password"
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "The email address provided is invalid."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email address or password."
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email address or password."
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(200).json({
            success: true,
            message: "User successfully logged in."
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "strict",
            secure: false
        });
        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id }).select("-password");

        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });  
    }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    getUser
};