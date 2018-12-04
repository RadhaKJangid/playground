var command=require("yargs").argv;
var fs=require('fs');
var validator = require('validator');
console.log(validator.isEmail(command.Email));

if(command.cmd==="newticket")
{
  fs.writeFile('file.txt',"product="  +command.product+"" +"\n"+"product_no=" +command.productNo+"" +"\n"+ "phoneNo=" +command.phone_no+"" +"\n"+ "Email=" +command.Email +"\n",function(err){
  if(err) throw err;
  console.log('Preparing to save');
  });
}

else if(command.cmd==="update")
{
  fs.writeFile('file.txt',"Serial_No" +command.serial_no,function(err){
  if(err) throw err;
  console.log('preparing to update');
  });
}
else{
    console.log("no such command");
}
