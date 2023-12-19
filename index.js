
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
server.use(express.json()); //body parser


//middleware

/*server.use((req,res,next)=>{
    console.log(req.method, req.ip, req.hostname, req.get('User-Agent'), new Date());
    next();

})
*/



//middleware


//API - Endpoint - Route
//API ROOT, BASE URL : localhost:8080, google.com, then uske aage url like pro sb add honge
//products
///CRUD
//create api/ create post/products
server.post('/pro',(req,res)=>{
    console.log(req.body);
    pro.push(req.body);
    res.json(req.body)
    //res.json({type:'POST'})
})
//read get / products
server.get('/pro',(req,res)=>{
    //res.json({type:'GET'})
    res.json(pro)
})

server.get('/pro/:id',(req,res)=>{
    //res.json({type:'GET'})
    const id=+req.params.id;//+ se hmne string se number me change krliya
    const p=pro.find(p=>p.id==id)
    res.json(p)
})

//update put / products/:id
server.put('/pro/:id',(req,res)=>{
    const id=+req.params.id;//+ se hmne string se number me change krliya
    const pindex=pro.find(p=>p.id==id)
    pro.splice(pindex,1,{...req.body, id:id})
    //res.json({product:'updated'})
    res.status(201).json();
})


//delete DELETE /products/:id
server.delete('/',(req,res)=>{
    const id=+req.params.id;//+ se hmne string se number me change krliya
    const pindex=pro.find(p=>p.id==id)
    pro.splice(pindex,1)
    //res.json({product:'updated'})
    res.status(201).json();
})
//inn sbhi ka path (/) same hi hai means, ek hi path pr alag alag method ho skte hai


//server.get('/',(req,res)=>{
    //res.send('hey')
   // res.sendFile('https://images.unsplash.com/photo-1702651598372-f8e777dabe6c?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
   //res.json(pro);
   //res.sendStatus(404);
   //res.status(201).send('hello');
//})


//body code
//ye hai server ka end
//end
server.listen(8080,()=>{
    console.log('server started');
})
//end

