const express = require('express');
const path = require('path');
const app = new express;
const booksRouter = require('./src/routes/booksRouter');
const nav = require('./src/routes/nav');
const books = require('./src/routes/books');


app.use(express.json());
app.use(express.static(path.join("public")));
app.use('/books',booksRouter);
app.set("views","./src/views");
app.set("view engine","ejs");

app.get('/',(req,res)=>{

    res.render("index",
    {
        nav ,
        title : "Library App "
    }
    );  
});
app.post('/simil',(req,res)=>{
      
    const gokul = 
    {
        "id" : books.length+1,
        "title": req.body.bname,
        "author":req.body.aname,
        "src":req.body.src
    }
  books.push(gokul);
  res.send("success");

})
app.get('/underc',(req,res)=>{

    res.send("<h1>Page Under Construction</h1>");
})
app.get('/addbook',(req,res)=>{  
    res.render('addbook',{nav});
})
app.listen(3333,()=>{
    console.log("server ready on port:3333");
});