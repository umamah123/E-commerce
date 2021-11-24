
var express = require('express');
var router = express.Router();
var mysqlConnection = require('../connection')


router.post('/', (req, res) => {
  const data={userId:req.body.userId,username:req.body.username,password:req.body.password,name:req.body.name,role:req.body.role}
  mysqlConnection.query('INSERT INTO users SET ?', data ,(err, rows) => {
    console.log("...")
      if (!err && data.password.length >=6 && data.password != data.username && data.username != data.name){
     
          res.send(rows);
       //  res.send("user details added");
  }
      else{
       console.log("check  credentials")
        res.send(err);
      }
  })
});


module.exports = router;