const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {


    //EXTREMELY PRIMITIVE ROUTING MECHANISM + API-like behaviour

    // //check for url (if we go to /test, line 7 will display 'test')
    // // console.log(req.url);
    // if(req.url === "/") {
    //     //read file
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
    //         //check for error
    //         if(err) throw err;
    //         //set content type
    //         res.writeHead(200, {"Content-Type": "text/html"})
    //         //output file content
    //         res.end(content);
    //         // res.end("<h1>Homepage</h1>");
    //     })
       
    // }


    // if(req.url === "/about") {
    //     //read file
    //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
    //         //check for error
    //         if(err) throw err;
    //         //set content type
    //         res.writeHead(200, {"Content-Type": "text/html"})
    //         //output file content
    //         res.end(content);
    //         // res.end("<h1>Homepage</h1>");
    //     })
       
    // }


    // //API behaviour
    // if(req.url === "/api/users") {

    //      const users = [
    //          {
    //              name: "Bob Smith",
    //              age: 40
    //          },

    //          {
    //             name: "John Doe",
    //             age: 30
    //         }
    //      ];

    //       //set content type
    //       res.writeHead(200, {"Content-Type": "application/json"})
    //       //turn json to object (serialize)
    //       res.end(JSON.stringify(users));
    // }






    //PROPER SERVER CONFIGURATION WITH DYNAMIC PATHS

    //build filepath (check for root url ("/") or grap the actual request URL if it's different)
    let filePath = path.join(
        __dirname, 
        "public", 
        req.url === "/" ? "index.html" : req.url
    );

    // console.log(filePath);


    //get file extension
    let extname = path.extname(filePath);

    console.log(extname);

    //set initial content type
    let contentType = "text/html";

    // console.log(extname);

    //check extension and set content type
    switch(extname) {
        case ".js":
            contentType = "text/javascript";
            break;

        case ".css":
            contentType = "text/css";
            break;

        case ".json":
            contentType = "application/json";
            break;
        
        case ".png":
            contentType = "image/png";
            break;

        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        //check for a specific type of errors
        if(err) {
            if(err.code == "ENOENT") {
                //page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {

                    res.writeHead(200, {"Content-Type" : "text/html"});

                    //send content (404 page)
                    res.end(content, "utf-8");
                })
            } else {
                //if some server error 
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
          //if no error
        } else {
            //success
            res.writeHead(200, {"Content-Type": contentType });
            //send the actual content
            res.end(content, "utf8");
        }
    });
});


//define PORT (look for environment or look for 5000 default)
const PORT = process.env.PORT || 5000;
//listen to port
server.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));