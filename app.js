const express = require('express');
const fs= require("fs")
const bodyParser = require("body-parser");
const hbs = require('hbs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

// app.get("/", (req, res) => {
//     res.sendFile('public/index.html', {root: __dirname})
// })

app.get('/', (req, res) => {
    res.render('home');
}) 

app.get("/about", (req, res) => {
    res.render("about.hbs")
})

app.get("/login", (req, res) => {
    res.render("login.hbs",{
        pageTitle: "Login Page",
        buttonText: "Login"
    })
})
app.get("/signup", (req, res) => {
    res.render("signup.hbs",{
        pageTitle: "Sign Up Page",
        buttonText: "Sign Up"
    })
})



app.get("/list", (req,res) => {
    res.render("list.hbs");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})