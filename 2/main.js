const fs = require("fs");

fs.open("new_file1.txt", "w", (err) => {
  if (err) throw err;
  console.log("done1");
});

fs.writeFile("new_file2.txt","hi",(err)=> {
    if (err) throw err;
    console.log("done2");
})

fs.appendFile("new_file3.txt","hi",(err)=>{
    if(err) throw err;
    console.log("done3");
})
