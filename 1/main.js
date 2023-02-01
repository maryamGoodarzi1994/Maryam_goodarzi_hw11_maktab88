const fs = require("fs");
fs.appendFile("./text.tx", "\n The world is awesome!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done!");
  }
});
