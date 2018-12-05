var fs = require("fs");
 fs.readFile('./dummy.json', 'utf8',function(err,data){
     if(err) throw err

 data= JSON.parse(data);
console.log("data is",data);
} );