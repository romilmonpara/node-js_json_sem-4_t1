var ps=require("fs");
ps.mkdirSync("Hello"); 
ps.writeFileSync("Hello/user.txt","Hello"); 
ps.appendFileSync("Hello/user.txt","\nWorld");
var data = ps.readFileSync("Hello/user.txt","utf-8");
ps.renameSync("Hello/user.txt","Hello/user1.txt");
console.log(data.toString());
ps.unlinkSync("Hello/user1.txt");
ps.rmdirSync("Hello");