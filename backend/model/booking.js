const mongoose = require("mongoose")

const {Schema,model} = mongoose

const bookingSchema = new Schema({
     userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
     },

     name:{
        type:String
     },

     date:{
        type:String
     },

     time:{
        type:String
     }
})

const Booking = model("Booking",bookingSchema)

module.exports =  Booking