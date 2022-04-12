const cp = require("child_process");

cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});

// run synchronously! Runs and then spits it back out
