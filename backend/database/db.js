const mongoose = require('mongoose');

const dbConnection = ()=>{
    try{
        mongoose.connect("mongodb+srv://harshdomadiya1014:xlw7ubVtOn4gvcPA@cluster0.v2gprql.mongodb.net/project?retryWrites=true&w=majority")
        console.log("db connected");
    }catch(e){
        console.log("error in db connection");
        console.error(e);
    }
   
}
module.exports = dbConnection;