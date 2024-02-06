import { Sequelize } from "sequelize";
import { studentModel } from "./models/student.js";
import { bookModel } from "./models/book.js";

export const connection=async()=>{
    const sequelize = new Sequelize('db1', 'postgres', 'mali@1902', {
        host: 'localhost',
        dialect:  'postgres'
      });

      //Student Table
let student=null
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        student=studentModel(sequelize)
        await sequelize.sync()
        console.log(" Student table is created...")
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
      //Book Table
      let book=null
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        book=bookModel(sequelize)
        await sequelize.sync()
        console.log(" Book table is created...")
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      
}

