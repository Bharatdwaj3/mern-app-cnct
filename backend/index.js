const express =require("express");
const mongoose =require("mongoose");
const app=express()

mongoose.connect("mongodb+srv://badrikedarjaydutt456:9ECS0Pj5QbZypCGQ@cluster0.094a9.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0");


const movieSchema=new mongoose.Schema({
    plot:String,
    genre:[String],
    runtime:[Number],
    cast:[String],
    poster:String,
    title:String,
    fullplot:String,
    languages:[String],
    released:Date,
    directors:[String]
});
const Movie = mongoose.model("Movie", movieSchema, "movies"); 
app.get("/movies",async(req,res)=>{
    try{
        const movies=await Movie.find();
        res.json(movies);
    }catch(err){
        console.error("Error fetching movies",err);
        res.status(500).send("Error fetching movies");
    }
})

app.listen("8000",()=>{
    console.log("Server is running!!!");
})
