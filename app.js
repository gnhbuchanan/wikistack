const express = require("express");
const morgan = require("morgan");
const {db} = require('./models') //require will default to grab an 'index.js' file
//the brackets deconstruct

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(req,res,next)=>{
    console.log('hello world')
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

db.authenticate().
then(() => {
  console.log('connected to the database');
});