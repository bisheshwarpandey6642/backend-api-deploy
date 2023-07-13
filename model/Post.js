const mongoose = require('mongoose')

const PostScheme = new mongoose.Schema({

    name:{
        type:String
    },
    phone:{
        type:Number,
        required: true
    }

})

module.exports = mongoose.model('PostSc', PostScheme)