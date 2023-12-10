const fs = require("fs");

fs.writeFileSync(
  "hello.txt",
  "Will this be appended towards the end of the file"
);
