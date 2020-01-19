const os = require("os");

//get platform
console.log(os.platform());

//get cpu architecture
console.log(os.arch());


//get cpu core info
console.log(os.cpus());

//get free memory
console.log(os.freemem());

//get total memory
console.log(os.totalmem());


//get home directory
console.log(os.homedir());


//get uptime
console.log(os.uptime());