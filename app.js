
//var jwt = require('jsonwebtoken');
const express = require('express');
var mysqlConnection = require('./connection')
var registerRouter = require('./routes/register')
var pro = require('./routes/products')
var loginRouter = require('./routes/login')
var vat = require('./middleware/controller')
var proval = require('./middleware/productvalidation')
var userinfo = require('./routes/userinfo')
var productinfo = require('./routes/productinfo')
const app = express();

app.use(express.json());

app.use('/register',registerRouter);
app.use('/login',loginRouter)


app.get('/userinfo',vat,userinfo)
app.post('/products',vat,proval,pro)

app.get('/productinfo',vat,productinfo)



app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

