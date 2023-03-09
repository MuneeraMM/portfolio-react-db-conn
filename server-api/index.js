const express = require ('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { json } = require('express');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

    user:'root',
    host:'localhost',
    password:'muneera',
    database:'react-crud'

});

app.post("/api/insert",(req, res)=>{
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

   
    db.query("INSERT INTO contact (name,email,message) VALUES(?,?,?)",[name ,email ,message ],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Values Inserted Successfully");
        }
    });

});

app.listen(3001, () => {
    console.log("running on port 3001");
});