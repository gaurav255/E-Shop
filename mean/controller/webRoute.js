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
	res.render("contact")
})

route.get("/shop",function(req,res)
{
	res.render("shop")
})

route.get("/checkout",function(req,res)
{
	res.render("checkout")
})

route.get("/cart",function(req,res)
{
	res.render("cart")
})

route.get("/account",function(req,res)
{
	res.render("account")
})

route.get("/shop-detail",function(req,res)
{
	res.render("shop-detail")
})

route.get("/wishlist",function(req,res)
{
	res.render("wishlist")
})
module.exports=route