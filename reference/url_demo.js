const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//get serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//get host (root domain) ->incldes port
console.log(myUrl.host);

//get hostname (does not include the port if url was "http://mywebsite.com:8000/hello.html?id=100&status=active")
console.log(myUrl.hostname);


//pathname -> returns only /hello.html
console.log(myUrl.pathname);

//serialized query (gets the query)
console.log(myUrl.search);

//get query as object
console.log(myUrl.searchParams);

//add parameters to url
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));