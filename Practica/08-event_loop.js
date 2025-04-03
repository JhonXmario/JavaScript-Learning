const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.write("Welcome to the principal page");
      return res.end();
    }

    if (req.url === "/about") {
        
        // task de larga duración
        /* for (let i = 0; i < 100; i++) {
            console.log(Math.random() * i);
        } */
        return res.end("About page");
      }
    
    res.end("404 Not Found");
  })
  
server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
