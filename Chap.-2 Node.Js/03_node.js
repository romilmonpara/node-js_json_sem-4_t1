var ps = require("fs");
ps.writeFileSync("Node.txt","First Node")
var data = ps.readFileSync("Node.txt")
console.log(data.toString())

ps.unlinkSync("Node.txt")

{/* If you do not use "utf-8" in readFileSync
    then write toString() for data printing at console.log(data.toString()) */}

{/* Without "utf-8" && toString() it will give an output like this :
    <Buffer 46 69 72 73 74 20 4e 6f 64 65>       */}

{/* var ps = require("fs");
ps.writeFileSync("Node.txt","First Node")
var data = ps.readFileSync("Node.txt")
console.log(data) */}