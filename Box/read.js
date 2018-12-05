var fs = require('fs');
var str = 'RADHA';
var i,char=[];
/*for(i=0;i<str.length;i++){
    char.push(str[i]);
    console.log(char);
}*/
fs.readFile('./fontmatrix.json','utf8',function(err,data){
        if(err) throw err;
        data = JSON.parse(data);
        for(i=0;i<str.length;i++){
           
            console.log( str[i],data[str[i]]);
     
        }
    })