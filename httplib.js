const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>
{
    res.writeHead(200,{'content-Type':'text/html'})
    if(req.url === '/home' || req.url === '/')
    {
        let data =fs.readFileSync('Static/index.html');
        res.write(data);
    }
    else if(req.url === '/about')
    {
        let data=fs.readFileSync('Static/about.html')
        res.write(data);
    }
    res.end();
}).listen(8080,() =>{console.log('server startedb')});