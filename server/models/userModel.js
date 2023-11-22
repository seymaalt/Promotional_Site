const mongoose = require("mongoose");


const UserSchema =  mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please add the name"],
        },
        email:{
            type:String,
            required:[true,"Please add the email"],
            unique:[true,"Email address already taken"],
        },
        passwordHash:{
            type:String,
        },
        passwordSalt:{
            type:String,
            required:[true,"Please add the password"],
        },
        favorities: [
            {
                url: {
                    type: String,
                  },
                  template: {
                    type: String,
                    enum: ["temp1", "temp2", "temp3"],
                  },
            }
          ],
    },
    {
        timestamps:true
    }
);

module.exports= mongoose.model("User",UserSchema);