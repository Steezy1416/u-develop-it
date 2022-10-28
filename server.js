const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const db = require("./db/connection")
const apiRoutes = require("./routes/apiRoutes")

//express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api", apiRoutes)

//default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end()
})

//start server after db connection
db.connect(err => {
    if(err) throw err
    console.log("Database Connected")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})