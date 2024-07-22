const mongoose = require('mongoose')

const {model,Schema} = mongoose

const serviceSchema =  new Schema({
    name:{
        type:String
    },

    description:{
        type:String
    },

    price:{
        type:Number
    },

    duration:{
        type:String
    }
})

const Service = model('Service',serviceSchema)

module.exports = Service