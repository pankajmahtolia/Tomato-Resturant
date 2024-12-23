import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import validator from "validator";

//Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User Doesn't exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token});
    } catch {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}


//Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // checking user is already exist
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please enter strong password",
            });
        }

        // hashing user password

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            cartData: {}  // Initialize cartData as an empty object
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}


//Delete User
const deleteUser = async (req, res) => {

}


export { loginUser, registerUser };