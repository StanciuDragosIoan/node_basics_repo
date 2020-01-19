const fs = require("fs");
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err =>{
//     if(err) throw err;
//     console.log("folder created..");
// });
/*
    method takes in a 1st param (the folder name, an options object which is empty and
    a callback function)
*/



//Create file and write to it
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello Workd!", err =>{
//     if(err) throw err;
//     console.log("file created and text written..");


//     //file append
//     fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " I love node JS", err =>{
//         if(err) throw err;
//         console.log("file created and text written..");
//     }); 
// });



//read from file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });


//rename a file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "hello_changed.txt"), err =>{
    if(err) throw err;
    console.log("File Renamed...");
});
    