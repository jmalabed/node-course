const path = require("path");
const { log } = require("util");
const v8 = require("v8");

log(v8.getHeapStatistics());
log(path.basename(__filename));
log("^ The name of the current file");
