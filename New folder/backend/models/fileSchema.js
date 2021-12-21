var mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    } ,
    email:{
        type:String,
        required:true
    } ,
    phone:{
        type:String,
        required:true
    } ,
    bankName:{
        type:String,
        required:true
    } ,
    bankAccount:{
        type:String,
        required:true
    } ,
    clientName:{
        type:String,
        required:true
    } ,
    clientAddress:{
        type:String,
        required:true
    } ,
    invoiceNumber:{
        type:String,
        required:true
    } ,
    invoiceDate:{
        type:String,
        required:true
    } ,
    dueDate:{
        type:String,
        required:true
    } ,
    amount:{
        type:String,
        required:true
    } ,

});

const File = mongoose.model('FILE',fileSchema);
module.exports = File;