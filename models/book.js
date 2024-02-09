 import  { Sequelize } from "sequelize";
 import express from 'express'
 const router=express.Router()
 import { posts } from './services/source.js';

 router.post('/book',posts)

  export const bookModel =(sequelize)=>{
    const DataTypes=Sequelize
    return sequelize.define("book",{
        name:{
            type:DataTypes.STRING
        },
        auther:{
            type:DataTypes.STRING
        }
    })
}
module.exports=router
// Add this line somewhere in your code
process.setMaxListeners(15); // Set the limit to 15 or adjust as needed
