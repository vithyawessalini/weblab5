var http=require('http');
var querystring = require('querystring');
var qs,name;
http.createServer(function(req,res){
var data1='';
req.on('data',function(chunk){
    console.log("Chunk:"+chunk);
data1 = data1 + chunk;
console.log("Data in String format:"+ data1);
});
req.on('end', function () {
    qs = querystring.parse(data1);    
    console.log(qs["fname"]);  
    name = qs["fname"];      
    res.write("Hello "+name+",you has been registered successfully.");  
    const selectedValue = qs["daycamp"];
    res.write('You have selected '+selectedValue)  
    res.end();    
    });
}).listen(4008);
console.log('Server has started...');
