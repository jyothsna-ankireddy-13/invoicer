const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
require('../db/dbconnection');
const File = require("../models/fileSchema")



router.get('/', (req, res)=>{
    
    res.send("Hello this is routerjs get")

});

//router.post('/savedata',(req,res)=>{
    
    //const {name,address,email,phone,bankName,bankAccount,clientName,clientAddress,invoiceNumber,
            //invoiceDate,dueDate,amount} = req.body;
    //if(!name || !address || !email || !phone || !bankName || !bankAccount || !clientName || !clientAddress || !invoiceNumber || !
        //invoiceDate || !dueDate || !amount){
           // return res.status(422).json({error:"plz fill the required fields"});
        //}
    //File.findOne({invoiceNumber:invoiceNumber})
        //.then((invoiceNumberExist)=>{
            //if(invoiceNumberExist){
                //return res.status(422).json({error:"Invoice already exist"})
            //}
            //const file = new File({name,address,email,phone,bankName,bankAccount,clientName,clientAddress,invoiceNumber,
                //invoiceDate,dueDate,amount})
            //file.save().then(()=>{
                //res.status(201).json({message:"Invoice added successfully"});
            //}).catch((err)=>res.status(500).json({error:"Failed to save"}))
        //}).catch(err =>{console.log(err)})
//})
router.post('/savedata',async(req,res)=>{
    
    const {name,address,email,phone,bankName,bankAccount,clientName,clientAddress,invoiceNumber,
            invoiceDate,dueDate,amount} = req.body;
    if(!name || !address || !email || !phone || !bankName || !bankAccount || !clientName || !clientAddress || !invoiceNumber || !
        invoiceDate || !dueDate || !amount){
            return res.status(422).json({error:"plz fill the required fields"});
        }
    try{
        const fileExist = await File.findOne({invoiceNumber:invoiceNumber});

        if(fileExist){
            return res.status(422).json({error:"Invoice already exist"})
        }
        const file = new File({name,address,email,phone,bankName,bankAccount,clientName,clientAddress,invoiceNumber,
            invoiceDate,dueDate,amount})
            //new file
        await file.save()
        res.status(201).json({message:"Invoice added successfully"});
    } catch(err){
        console.log(err)
    }
    
        
            
            
})

module.exports = router;