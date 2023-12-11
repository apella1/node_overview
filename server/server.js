const http = require("node:http");

const requestHandler = require("./routes");

const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log(`Server is running in port 3000`);
});
