import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true}
})

//We can create a model only once hence if mongoose.model.food there return OR create a new model
const foodModel = mongoose.model.food || mongoose.model("food", foodSchema)

export default foodModel;
