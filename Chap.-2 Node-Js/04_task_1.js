{/* Write a node.js script to copy content of one file to another file.
    Data should be fetched from source.txt & insert it into destination.txt  */}

var ps = require("fs");

var data = ps.readFileSync("source.txt")
console.log(data.toString() + "\ninserted successfully!!")
ps.writeFileSync("Destination.txt",data)