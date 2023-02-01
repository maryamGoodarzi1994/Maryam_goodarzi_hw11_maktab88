const fs = require("fs");

fs.stat("file.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("not exist!");
  }
});
fs.access("file.txt",fs.W_ok,(err)=>{
   if (err){
    console.log(err);
    return;
   }
   else{
console.log("exist!");
   }
})