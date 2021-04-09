const express=require('express')
const route = express.Router()

route.get("/home",function(req,res)
{
	res.render("home")
})

route.get("/about",function(req,res)
{
	res.render("about")
})

route.get("/service",function(req,res)
{
	res.render("service")
})

route.get("/contact",function(req,res)
{
	res.render("service")
})
module.exports=route