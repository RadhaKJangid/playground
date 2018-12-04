var fs = require('fs');
fs.appendFile('new.txt','Hello World', function(err){
    if(err) throw err;
    console.log('Saved Successfuly!');
});