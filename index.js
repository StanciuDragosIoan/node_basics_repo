const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //check for url (if we go to /test, line 7 will display 'test')
    // console.log(req.url);
    if(req.url === "/") {
        res.end("<h1>Home</h1>");
    }
});


//define PORT (look for environment or look for 5000 default)
const PORT = process.env.PORT || 5000;
//listen to port
server.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));