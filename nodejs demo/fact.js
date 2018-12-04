var process = require('process');
var i,n,fact=1;
n = process.argv[2];
for(i=1;i<=n;i++)
{
    fact = fact * i;
}
console.log(fact)