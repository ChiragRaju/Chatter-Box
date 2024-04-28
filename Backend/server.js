const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());


app.use("/api/user", userRoutes);


app.get("/api/chat", (req, res) => {
  res.send(chats);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started in Port ${PORT}`));
