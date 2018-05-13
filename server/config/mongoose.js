const mongoose =  require("mongoose");

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/productmanager');
    mongoose.Promise = global.Promise;
}