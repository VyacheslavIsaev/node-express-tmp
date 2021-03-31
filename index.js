const express=requires("express");

const PORT=8080;
const app = express();

app.get("/", (req, res)=>{
    res.send("Hi there!");    
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
});
