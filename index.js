
const express=require('express')
const server = express()
const productRouter = require('./routes/product')
//const userRouter = require('./routes/users'); 


//body parser
server.use(express.json()); 
server.use('/pro',productRouter.router);
//server.use('/users',userRouter.router);


//MVC (MODEL VIEW CONTROLLER): s a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display.
//create api/ create post/products (crud)




server.listen(8080,()=>{
    console.log('server started');
})
//end

