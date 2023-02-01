const fs = require("fs")

fs.readFile("./user-data.json","utf8", (err,data)=>{
    if(err) throw err;
    console.log(JSON.parse(data).filter(user => user.age > 18)); 
})