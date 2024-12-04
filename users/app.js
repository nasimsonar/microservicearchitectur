const express = require("express");
const PORT = 3000;

const app = express()

app.get('/users', (req,res) => {
    res.send("Massage from User service")
})

app.listen(PORT, () => console.log('USER SERVICE STARTED'))