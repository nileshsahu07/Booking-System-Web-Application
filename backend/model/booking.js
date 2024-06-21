const mongoose = require("mongoose")

const {Schema,model} = mongoose

const bookingSchema = new Schema({

})

const bookingData = model("bookingData",bookingSchema)

module.exports = bookingData 