const url = require('url');
const myUrl = new URL('https://mydomain.com:4200/index.html?id=15&status=active');
//Getting the serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Getting the Host
console.log(myUrl.host);

//Getting the Host (Doesn't return the port)
console.log(myUrl.hostname);

//Getting the Pathname
console.log(myUrl.pathname);

//Getting the Serialized query
console.log(myUrl.search);

//Getting the Param Object
console.log(myUrl.searchParams);

//Appending to the Param Object
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

//Looping through the Param Object
myUrl.searchParams.forEach((data, value) => console.log(`${data}: ${value}`))
