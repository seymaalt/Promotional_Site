const mongoose = require("mongoose");


const DataSchema =  mongoose.Schema(
    {
        userId:{
            type:String,
        },
        publishToken:{
            type: String,
         
        },
        
        tempNo:{type:String}
  
    }
 
);

module.exports= mongoose.model("PublishingDataTemp3",DataSchema);