{/* Read data from file & sort that data in ascending order using sort.  */}

var ps = require("fs");
ps.writeFileSync("Node.txt","1 86 653 15 21 30");
var data = ps.readFileSync("Node.txt", "utf-8");
console.log("File data : " + data);
f_data = data.split(" ");
f_data.sort((a,b)=> a-b);
console.log("Data After Sort : " + f_data);

{/* File data : 1 86 653 15 21 30 */}
{/* Data After Sort : 1,15,21,30,86,653 */}