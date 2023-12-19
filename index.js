
//const http = require('http');
const fs=require('fs')


const index=fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const pro = data.products;


///lets start express ///


//ye hai server ka start -----
//start
const express=require('express')

//nya server
const server = express()
//start
//ab hm apis or paths bnaenge
//body code


//middleware

/*server.use((req,res,next)=>{
    console.log(req.method, req.ip, req.hostname, req.get('User-Agent'), new Date());
    next();

})
*/

const auth =(req,res,next)=>{
    console.log(req.query);
    if(req.query.password=='20'){next()}
    else{
        res.sendStatus(401);
    }
}
server.use(auth);


//middleware


//API - Endpoint - Route
server.get('/',(req,res)=>{
    res.json({type:'GET'})
})
server.post('/',(req,res)=>{
    res.json({type:'POST'})
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
//inn sbhi ka path (/) same hi hai means, ek hi path pr alag alag method ho skte hai


server.get('/',(req,res)=>{
    //res.send('hey')
   // res.sendFile('https://images.unsplash.com/photo-1702651598372-f8e777dabe6c?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
   //res.json(pro);
   //res.sendStatus(404);
   //res.status(201).send('hello');
})


//body code
//ye hai server ka end
//end
server.listen(8080,()=>{
    console.log('server started');
})
//end

