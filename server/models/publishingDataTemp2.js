const mongoose = require("mongoose");


const DataSchema =  mongoose.Schema(
    {
        userId:{
            type:String,
        },
        publishToken:{
            type: String,
        },
        description:[{
            text:{ type: String},
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String},
            backgroundColor:{type:String}
        }],
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
        innovations:[{
            text:{ type: String},
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String}
            
        }],
        dataSecurity:{
            text:{ type: String},
            fontSize:{type: String},
            color:{type:String},
            font:{type:String},
            textAlign:{type:String}
        },
        comments:[{
                text:{ type: String},
                fontSize:{type: String},
                color:{type:String},
                font:{type:String},
                textAlign:{type:String}
        }],
        downloadStarDeveloper:{
            download:{ type: String},
            star:{type: String},
            developer:{type:String}
        }
  
    }
 
);

module.exports= mongoose.model("PublishingDataTemp2",DataSchema);