const mongoose = require("mongoose");


const DataSchema =  mongoose.Schema(
    {
        userId:{
            type:String,
        },
        publishToken:{
            type: String,
        },
        header:{
            type: String,
        },
        designHeader:[{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String}
            
        }],
        description:{
            type: String,
        },
        designDescription:[{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String},
            backgroundColor:{type:String}
        }],
        color:{
            type: String,
        },
        logo:{
            type: String,
        },
        downloadLink:{
            type: String,
        },
        images: [
            [{
              type: String,
            }],
          ],
        innovations:{
            type: String,          
        },
        designInnovations:[{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String}
            
        }],
        dataSecurity:{
            type: String,
        },
        designDataSecurity:[{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String}
            
        }],
  
    }
 
);

module.exports= mongoose.model("PublishingDataTemp1",DataSchema);