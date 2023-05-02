var http=require('http');
var url=require('url');
var querystring = require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    var name=querystring.parse(query)["fname"];
   response.write('Hello '+name+', has been registered successfully.');
    const selectedValue = querystring.parse(query)['daycamp'];
    response.write('You have selected '+selectedValue)
    console.log(name)
   response.end();
}
http.createServer(onRequest).listen(4009);
console.log('Server has started...');