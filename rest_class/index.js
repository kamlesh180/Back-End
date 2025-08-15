const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.json());


app.use(express.urlencoded({ extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username:"Kamlesh18.0",
        content:"I love codding"
    },
    {
        username:"Rahul775",
        content:"Hard work is the key to success"
    },
    {
        username:"Rakesh2.88",
        content:"I got selected in TCS"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.send("Post request successfully working");
});

app.listen(port, () => {
    console.log("listening to port:8080");
}); 