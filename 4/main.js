const fs = require ("fs");
fs.stat("./file.txt",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.unlink("./file.txt",(err1)=> {
        if(err){
            console.log(err1);
            return;
        }
        console.log("removed successfully!");
    })
    
})