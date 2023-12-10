const http = require("node:http");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' placeholder='What do you feel like saying?' name='message' /> <input type='submit' value='Submit'/></form></body>"
    );
    res.write("</html>");
    // ! signifies the end of writing to the response object
    return res.end();
  }
  // res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Response Title</title></head>");
  res.write("<body><p>Successfully navigated to the message page</p></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log(`Server is running in port 3000`);
});
