var mysql = require('mysql');
var command=require("yargs").argv;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
 database: "ticket_DB"
});
if(command.cmd==="newticket"){
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var data = {ProductNo:command.ProductNo,ProductName:command.ProductName,Email:command.Email,PhoneNumber:command.PhoneNumber}
 // var sql = ;
  con.query('INSERT INTO ticket_tbl SET ?',data, function (err, result,fields) {
    if (err) throw err;
    console.log("Prepring to save");
    console.log("1 record inserted");
});
});
}

else if(command.cmd==="update")
{
  con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE ticket_tbl SET ProductName = 'Nokia' WHERE ProductName = 'Redmi'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}
else{
  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM ticket_tbl WHERE PhoneNumber = '45677'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
}
