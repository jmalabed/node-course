const fs = require("fs");

const files = fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("complete");
  console.log(files);
});

console.log("started reading the files");
