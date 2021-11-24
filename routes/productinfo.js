var mysqlConnection = require('../connection')


var productinfo =  (req, res) => {
   
    var db = `select * from users join product on users.userId =product.createdBy`;
    mysqlConnection.query(db,[req.user.Id], (err, rows) => {

        if (!err){
            console.log(rows);
          res.send(rows)
        
        }
        else{
            console.log(err);
        }
    })
};

module.exports = productinfo;