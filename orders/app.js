const express = require("express");
const PORT = 3001;

const app = express()

app.get('/orders/me', (req,res) => {
    res.send("Massage from Orders - Me service")
})

app.listen(PORT, () => console.log('ORDER SERVICE STARTED'))