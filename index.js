const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: "welcome to express"});
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});