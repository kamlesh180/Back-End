const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname,"public")));

let posts = [
    {
        usename:"Kamlesh",
        content:"I love codding"
    },
    {
        usename:"Rahul",
        content:"Hard work is the key to success"
    },
    {
        usename:"Rakesh",
        content:"I got selected in TCS"
    },
];

app.get("/posts",(req,res)=>{
    res.send("server woerking well");
});

app.listen(port, () => {
    console.log("listening to port:8080");
}); 