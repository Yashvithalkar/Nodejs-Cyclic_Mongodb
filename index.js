require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const Book = require("./models/books");
const path = require("path");
const hbs = require("hbs");



const app = express()
const PORT = process.env.PORT || 3000


const static_path = path.join(__dirname,"./public");
const template_path = path.join(__dirname,"./template/views");
const partials_path = path.join(__dirname,"./template/partials");


app.use(express.static(static_path));
app.set("view engine","hbs"); // give permission to use hbs and views folder 
app.set("views",template_path);// he not gate views folder so we get him path
hbs.registerPartials(partials_path); //



mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
// app.get('/', (req,res) => {
//     res.send({ title: 'Books' });
// })

// app.get('/books', async (req,res)=> {

//   const book = await Book.find();

//   if (book) {
//     res.json(book)
//   } else {
//     res.send("Something went wrong.");
//   }
  
// });

// app.get('/add-note', async (req,res) => {
//   try {
//     await Book.insertMany([
//       {
//         title: "bajoriya",
//         body: "Body text goes here...",
//       },
//       {
//         title: "Games of Thrones",
//         body: "Body text goes here...",
//       }
//     ]);
//     res.json({"Data":"Added"})
//   } catch (error) {
//     console.log("err", + error);
//   }
// })

app.get("/", (req,res) => {
 
  res.render("index")
  
  });


  app.get("/register", (req,res) => {
 
    res.render("register")
    
    });

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})