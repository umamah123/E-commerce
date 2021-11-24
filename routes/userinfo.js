 var mysqlConnection = require('../connection')

var userinfo=(req, res) => {
   
    mysqlConnection.query(`select * from users where userId = ${req.user.id}`, (err, rows) => {
        if (!err){
          res.send(rows)
          
        }
        else{
            console.log(err);
        }
    })
};
module.exports = userinfo;