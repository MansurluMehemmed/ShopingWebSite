const fs = require('fs');
const cors = require('cors')
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
const product = fs.readFileSync('./product.json')
const products = JSON.parse(product)
const user = fs.readFileSync('./user.json')
const users = JSON.parse(user)
    app.get('/products',(req,res)=>{
      // const products = product.map(item=>item)
      res.json(products)
    })
    app.get('/users',(req,res)=>{
      // const products = product.map(item=>item)
      res.json(users)
    })
    // app.get('/product?count=0&offset=20',(req,res)=>{
    //   const count = parseInt(req.query.count)
    //   const offset = parseInt(req.query.offset);
    //   res.json({ products: product.slice(offset, offset + count),count: product.length });
    // })

app.listen(4000, function () {
  console.log('Example app listening on port 5173!');
});







// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'Root',
//   database: 'bootcamp'
// });

// connection.connect((err) => {
//   if (!err) { 
//     console.log("SUCCESS");
//   }
// });
// const sql = 'SELECT * FROM users'
// connection.query(sql,(err,data)=>{
//   if (!err) {
//     console.log(data);
//   }
// })
// app.get('/users', (req, res) => {
//   connection.query('SELECT * FROM users;', 
//   (err, data) => {
//     if (!err){
//       res.status(200).json(data)
//     }
//   })
// });
// app.post('/users', (req, res) => {
//   const {username,email,age,birth_date} = req.body;
//   console.log(age)
//   const sql = `
//   INSERT INTO users (username, email, age, birth_date)
//   VALUES ('${username}', '${email}', ${age}, '${birth_date}');
//   `
//   connection.query(sql, 
//   (err, data) => {
//     if (!err){
//       res.status(200).json(data);
//     }
//     else{
//       res.status(404).json({message:"Error"})
//     }
//   })
// });
// app.put('/users/:id', (req, res) => {
//   const id = req.params.id
//   const {username,email,age,birth_date} = req.body;

  
//   const sql = `UPDATE users
//   SET username = '${username}',
//    email = '${email}',
//    age = ${age},
//    birth_date = '${birth_date}'
//    WHERE id = ${+id}`
//   connection.query(sql, 
//   (err, data) => {
//     if (!err){
//       res.status(200).json(data)
//     }else{
//       res.status(404).json({message:'Error'})
//     }
//   })
// });
// fs.readFile('./tasks.json','utf8',(err,data)=>{
//   if(!err){
//     const newData = parseInt(data)
//     newData.map(item=>{
//       console.log(description)
//       const sql = `
//       INSERT INTO users (description, due, employee, finished)
//     VALUES ('${item.description}', '${item.due}', '${item.employee}', '${item.finished}');
//       `
//   connection.query(sql,(err,data)=>{
//     if (!err) {
//       console.log(data);
//     }
//   })
//     })
//     console.log(data);

//   }else{
//     console.error(err)
//   }
// })


// const card = [
//   {
//     "id":1,
//     "kartNum":"4169738831774868"
//   },
//   {
//     "id":2,
//     "kartNum":"4169738831775868"
//   },
//   {
//     "id":3,
//     "kartNum":"4169738831774848"
//   },
//   {
//     "id":4,
//     "kartNum":"4169738823474868"
//   },
//   {
//     "id":5,
//     "kartNum":"4169738456274868"
//   },
// ]

// app.get('/:id',(req,res)=>{
//     const id = parseInt(req.params.id)
//     const find = card.find(item=>item.id===id)
//     if(find){
//       res.status(200).json(find)
//     }
//     else {
//       res.status(404).json({err:404})
//     }
// })

