const express=require('express')
const route = express.Router()

route.get("/home",function(req,res)
{
	res.render("home")
})

module.exports=route