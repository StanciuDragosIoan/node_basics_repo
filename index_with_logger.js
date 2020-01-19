// const Person = require("./person");// common JS

// //ES6:
// //import Person from './person'; //this works only with babel not with native node 


// const person1 = new Person(
//     "John Doe",
//     30
// )


// person1.greeting();



const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

const logger = new Logger();

logger.on("message", (data)=> {

    console.log('Called Listener: ', data);

        

       
        if (fs.existsSync('./logs')) {

            console.log('check for logs');
                //file append
                fs.appendFile(path.join(__dirname, "/logs", "logs.txt"), `${data.id} \r\n`, err =>{
                    if(err) throw err;
                    console.log("new log appended..");
                }); 
          
        } else {
            console.log('no logs');
              //Create folder
              fs.mkdir(path.join(__dirname, "/logs"), {}, err =>{
                if(err) throw err;
                console.log("logs folder created..");
            });
    
        
            //Create file and write to it
            fs.appendFile(path.join(__dirname, "/logs", 'logs.txt'), data.id,(err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            }); 
        }
  
});

logger.log("Hello World");
 
 

