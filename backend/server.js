import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"
import userRouter from "./routes/UserRoute.js"
import "dotenv/config";
import cartRouter from "./routes/CartRouter.js"
import orderRouter from "./routes/OrderRouter.js"

//app config
const app = express() //An instance of an Express application

//middleware setup
app.use(express.json()) //middleware allows Express to parse incoming JSON data in POST requests, making it easier to handle JSON data in requests.
app.use(cors()) //enables CORS for all routes in the application. It lets your API handle requests from a different origin (e.g., when your frontend is hosted on a different domain than your backend).

//Database Connection
connectDB();

// API Endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads')) // API endpoint which loads image from upload when provided image eg. 1731140983041food_1.png
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("Welcome to Our Service");
})

const port = process.env.PORT || 4000;  // Use the dynamic port assigned by Render(For Hosting) or default to 4000
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started on http://localhost:${port}`);
});