var mongoose = require('mongoose');
const url = process.env.DATABASE;
//DB config
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection successful`)
}).catch((err)=>console.log(err))