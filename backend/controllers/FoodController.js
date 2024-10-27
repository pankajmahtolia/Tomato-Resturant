import { error } from "console";
import foodModel from "../models/FoodModel.js";
import fs from 'fs' //inbuild file system

//add food item API
const addFood = async (req, res) => {

    if (!req.file)
        return res.status(400).json({ success: false, message: "Image file is required" });

    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })


    try {
        await food.save();
        res.json({ success: true, message: "Successfully added Food" });
    } catch (error) {
        console.log("Error Ocurred at Food Controller" + error);
        res.json({ success: false, message: "Error" });
    }
}

// all food list API
const listFood = async (req, res) => {
    try {
        // To get all items of foodModel
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    } catch (error) {
        console.log("Error in getting FoodList" + error);
        res.json({success: false, message: "Error"});
    } 
}

// remove food item API

const removeFood = async (req, res) => {
    try {
        //Retrive object from DB 
        const food = await foodModel.findById(req.body.id);
        // delete from upload folder
        fs.unlink(`uploads/${food.image}`, ()=>{})

        //delete from db
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Successfully Deleted Food" });

    } catch (error) {
        console.log("Error in deleting Food" + error);
        res.json({success: false, message: "Error"});
    }
}

export { addFood , listFood, removeFood}