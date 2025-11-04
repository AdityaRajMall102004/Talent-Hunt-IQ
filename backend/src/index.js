import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import {serve} from 'inngest/express';
import {inngest,functions} from './lib/inngest.js';
import connectDB from './lib/db.js';
const port=process.env.PORT||5000;
dotenv.config();
const app=express();
const __dirname=path.resolve();
console.log(port);


//middlewares
app.use(express.json()); 
//credentials true allows cookies to be sent from frontend to backend
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));

app.use('/api/inngest',serve({client:inngest,functions}));
app.get('/health',(req,res)=>{ 
    res.status(200).json({msg:"API is working"});
    res.send('Hello World!');
}); 
app.get('/book',(req,res)=>{
    res.send('This is book route');
}); 
console.log(process.env.NODE_ENV); 
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')));
   app.get('/{*any}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});
 
}      
const startServer=async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });         
    }
    catch(err){
        console.error('Failed to start server:',err.message);
        process.exit(1);
    }
}   
startServer();