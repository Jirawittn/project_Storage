//ใช้งาน mongoose
const mongoose = require('mongoose')
const mongo = require('mongodb')
// const dbUrl='mongodb://localhost:27017/myProjects' ||  process.env.DB_URL
const dbUrl = 'mongodb+srv://mek:1234@cluster0.zn9r8eb.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

const db = mongoose.connection
const Schema = mongoose.Schema

const manageSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    dangerNumber:{
        type:Number,
        require:true
    },
    safeNumber:{
        type:Number,
        require:true
    },
}, { timestamps:true }
)

const Manages = module.exports = mongoose.model("storages", manageSchema)
module.exports.createProduct = function(newProducts, callback){
    newProducts.save(callback)
}

module.exports.getAllProducts = function(data){
    Manages.find(data)
}

module.exports.deleteProduct = function(id, callback){
    Manages.findByIdAndDelete(id, callback)
}

module.exports.saveProduct = function(model, data){
    model.save(data)
}

