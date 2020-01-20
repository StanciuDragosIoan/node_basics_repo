/*

    node is a runtime for JS (allwos JS to run on the server)

    it allows us to use node modules in 2 ways:

    ES6:
    import Module from './module'; //this works only with babel not with native node 

    Common JS:
    const module = require("./module");


    min 55 -> basic server created with http module

    


    WRITTEN NOTES (notes written intially on paper, worth to remember)

    Node JS

        is a JS runtime (allows us to run JS on the server as a service, using the V8 engine -> C++)

        it uses an event driven, non-blocking, I/O model
        it works asynchronously, on a single thread, using non-blocking I/O calls

        e.g.
            PHP is synchronous (runs on multiple threads) so every time a request is made, a
            new thread is being created/spawn and all the threads take up system memory (and
            eventually max out)

            a synchronous language must wait for 1 process to complete before it can start the
            next one

        Node supports tens of thousands of concurrent connections on a single thread and holds 
        them in an Event Loop

        Node's Event Loop:

                Node runs asynchronously on a single thread
                Node Supports concurrency via events and callbacks
                It uses an EventEmitter class to bind events and listeners 
                It is very fast and good for I/O operations (not good for CPU consuming calculations)


        Node is used with NPM (the node package manager)

        NPM:
                is used to install 3rd party packages
                packages get stored in the node_modules folder
                packages are listed in package.json file
                NPM scripts can be created to run tasks (such as running a server)

                npm init = initializes the npm manager and pakcage.json file
                npm i ... = installs 3rd party modules
                npm i ... -g = installs module globally (not inly in project but on the system)


        Node Modules:

                There are 3 types of modules:
                
                    core modules (come by default and can be used without prior install)
                    
                    3rd party modules (which have to be installed e.g. 'express')

                    there are custom modules (which we can create) which are files which have
                    an 'export' statement and can be used from other js files (imported)

            
        Nodemon:

                Is a node module that watches our files for changes and restarts the server
                each time we make one;

                we can install it globally with the -g flag and run nodemon script instead of
                node script

                or

                we can make an npm script inside the scripts object:

                            "scripts": {
                                "start": "node index",
                                "dev": "nodemon index"
                            }

                next in order to start a script we run "npm run dev" or "npm run start" ("npm run" + script name)



        How to deploy to heroku:

            -we need to have the port defined as process.env.PORT and the start script in package.json

            -in order to deploy:

                log into heroku through the heroku CLI (heroku login)

                add and commit all files
 
                run "heroku create" (this deploys to heroku as a git repo)

                #go to heroku URL/website and follow the instructions in the 'deploy' section

                URL for current successful deploy: https://rocky-chamber-98949.herokuapp.com/
*/