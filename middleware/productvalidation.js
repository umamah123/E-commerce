var proval = (req,res,next)=> {
    const data={
    SKU:req.body.SKU,
    Price:req.body.Price
}
if ((data.SKU >= '0' && data.SKU <='9') && (data.Price >10000)){
    next();
}else{
    console.log("invalid credentials")
}
}
module.exports = proval;