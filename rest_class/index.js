const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.json())
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id:uuidv4(),
        username:"Kamlesh18.0", 
        content:"I love codding"
    },
    {
        id:uuidv4(),
        username:"Rahul775",
        content:"Hard work is the key to success"
    },
    {
        id:uuidv4(),
        username:"Rakesh2.88",
        content:"I got selected in TCS"
    },
];

app.get("/posts",(req,res)=> {
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let Id = uuidv4();
    posts.push({ id,username, content });
   res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let{id} = req.params;
   let post = posts.find((p)=> id===p.id);
  res.render("show.ejs",{post});
});

 
app.listen(port, () => {
    console.log("listening to port:8080");
}); 