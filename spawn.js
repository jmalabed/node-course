const cp = require("child_process");

const questionApp = cp.spawn("node", ["questionsv2.js"]);

questionApp.stdin.write("Jared \n");
questionApp.stdin.write("Santa Cruz \n");
questionApp.stdin.write("Nothing! \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log("The questionApp process exited");
});
