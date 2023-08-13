const pool = require('../db')

const Create = async(req,res)=>{
    try{
        const {title , description , ingredients_name , instructions , prep_time , cook_time , total_time , servings , cuisine , meal_type , difficulty , author_name} = req.body
        const createdrecipe = await pool.query("INSERT INTO recipes (title , description , ingredients_name , instructions , prep_time , cook_time , total_time , servings , cuisine , meal_type , difficulty , author_name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[title , description , ingredients_name , instructions , prep_time , cook_time , total_time , servings , cuisine , meal_type , difficulty , author_name])
        console.log(createdrecipe)
        res.json(createdrecipe)
    }catch(err){
        console.log(err)
    }
}

const Get = async(req,res)=>{
    try{
        const recipedata = await pool.query("SELECT * FROM recipes")
        res.json(recipedata.rows)
    }catch(err){
        console.log(err)
    }
}

const GetById = async(req,res)=>{
    try{
        const {id} = req.params
        const recipedatabyid = await pool.query("SELECT * FROM recipes WHERE recipe_id = $1",[id])
        res.json(recipedatabyid.rows)
    }catch(err){
        console.log(err)
    }
}

const Update = async(req,res)=>{
    try{
        const {id} = req.params
        const {title , description , ingredients_name , instructions , prep_time , cook_time , total_time , servings , cuisine , meal_type , difficulty , author_name} = req.body
        const updatedrecipe = await pool.query("UPDATE recipes SET (title , description , ingredients_name , instructions , prep_time , cook_time , total_time , servings , cuisine , meal_type , difficulty , author_name) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) WHERE recipe_id = $13",[title , description , ingredients_name , instructions , prep_time , cook_time , total_time , servings , cuisine , meal_type , difficulty , author_name,id])
        res.json("Update successfully")
    }catch(err){
        console.log(err)
    }
}

const Delete = async(req,res)=>{
    try{
        const {id} = req.params
        const deletedrecipe = await pool.query("DELETE FROM recipes WHERE recipe_id = $1",[id])
        console.log("Deleted Successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = {Create , Get , GetById , Update , Delete}