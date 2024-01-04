const mongoose = require("mongoose");


const DataSchema =  mongoose.Schema(
    {
        userId:{
            type:String,
        },
        publishToken:{
            type: String,
        },
        description:{
             type: String,   
        },
        designDescription:{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String},
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
        designInnovations:{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String},
           
        },
        dataSecurity:{
             type: String,

        },
        designDataSecurity:{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String},
           
        },
        comments:[{
                type: String,
        }],
        designComments:[{
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String},
           
        }],
        downloadStarDeveloper:{
            download:{ type: String},
            star:{type: String},
            developer:{type:String}
        },
        tempNo:{type:String}

  
    }
 
);

module.exports= mongoose.model("PublishingDataTemp2",DataSchema);