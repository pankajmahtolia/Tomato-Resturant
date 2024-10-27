import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"

//app config
const app = express() //An instance of an Express application
const port = 4000


//middleware setup
app.use(express.json()) //middleware allows Express to parse incoming JSON data in POST requests, making it easier to handle JSON data in requests.
app.use(cors()) //enables CORS for all routes in the application. It lets your API handle requests from a different origin (e.g., when your frontend is hosted on a different domain than your backend).

//Database Connection
connectDB();

// API Endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working")
})


app.listen(port, () => {
    console.log(`Server Started on http:localhost:${port}`)
})

//mongodb+srv://pankajmahtolia:Aeiou369@cluster0.1ogrs.mongodb.net/?