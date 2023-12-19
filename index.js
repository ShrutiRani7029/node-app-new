
const http = require('http');
const fs=require('fs')

const index=fs.readFileSync('index.html','utf-8')
//const data = fs.readFileSync('data.json','utf-8');

const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const pro = data.products[0];


const server = http.createServer((req,res)=>{

    console.log(req.url, req.method)
    ///request me data le skte hai response me data bhej skte hai


    ///DYNAMIC HTML

     switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;

        case '/pro':
            res.setHeader('Content-Type', 'text/html');
            let mindex=index.replace('shruti',pro.name).replace('Hello',pro.id);
            res.end(mindex);
            break;
        default:
            res.writeHead(404,'NOT FOUND');
          
     }


    ///DYNAMIC HTML


    console.log('server started')
    //header me header ka naam aur uski value hoti hai setheader header set krega aur res.end use bhej dega
    //res.setHeader('dummy', 'dummyvalue')
    //res end ... response ko bhej deti hai
    //res.end('<h1>hillo</h1>')
    //res.setHeader('Content-Type', 'application/json')
    //res.setHeader('Content-Type', 'text/html')
    //content type application json aa jaegi
    //res.end(JSON.stringify(data));
    //res.end(data)
    //res.end(index)
})

///ab listen server ko port se bind krdega
server.listen(8080)