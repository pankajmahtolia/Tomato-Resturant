import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default:"user" },
    cartData: { type: Object, default: {} }
},{minimise:false}); //{minimise:false}, so cartData entry can be created without any data

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;