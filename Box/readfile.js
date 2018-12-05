var fs = require('fs');
//var str = 'RADHA';
var i,char=[];
/*for(i=0;i<str.length;i++){
    char.push(str[i]);
    console.log(char);
}*/
fs.readFile('./para.txt','utf8',function(err,data){
        if(err) throw err;
        for(i=0;i<data.length;i++){
    char.push(data[i]);
    //console.log(char[i]);
}
        //char.push(data);
});
        fs.readFile('./fontmatrix1.json','utf8',function(err,data){
            if(err) throw err;
            data = JSON.parse(data);
            for(i=0;i<char.length;i++){
                console.log(char[i],data[char[i]])
                //console.log( data);
        }
    })