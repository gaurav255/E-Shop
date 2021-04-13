const express = require('express')
const path = require('path')

const app = express()

const webRoute = require("./controller/webRoute")

app.set('view engine','ejs')
app.set('views',path.join(__dirname,"pages"))
app.use(express.static(path.join(__dirname,"assets")))

app.use("/",webRoute)
app.get("/",function(req,res)
{
	res.redirect("/home")
})

app.listen(8989,function()
{
	console.log("http:localhost:8989/")
})