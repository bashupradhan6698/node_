



/* global objects

console.log()
setTimeOut()
*/
// console.log(__filename)
// console.log(__dirname)
// require
// module

/* 
global scope vs block scope



*/
/* 

NODE modules

  -code module
    -fs module
    -path module
    -http module -> express uses these modules under the hood

  -third party module

    -nodemon

  -local module



*/
// function require(path) {

// }

const fs = require('fs') //returns {writeFileSync:()=>{},.........}
// fs.writeFileSync('./custom.txt', 'data hello')
let data = fs.readFileSync('./custom.txt', { encoding: 'utf8' })
console.log((data))

// , (err, data)=>{
//   console.log("error", err + "data", data)
// })

// const path = require('path')
// console.log(path.extname('text.txt'))
// console.log(path.join(__dirname, 'uploads'))

const http = require('http')

const server = http.createServer((req, res) => {


  if (req.url == '/api/todos' && req.method == 'GET') {
    res.write(JSON.stringify([{ "title": "html" }]))
    res.end();
  }
  else if (req.url == '/api/todos' && req.method == 'POST') {
    req.on("data", (data) => {
      console.log(JSON.parse(data))
    })
    res.write('post method....,todos from server')
    res.end();
  }

  res.end();
})

server.listen(8000, () => {

  console.log('server started.')
})


// const aut = require("./auth") // default import (aut is object )
const { signUp, login } = require("./auth") //named import

/* default import
aut.signUp('123456') //only in string
aut.login() //login get executed first because it is synchronous
 */


/* named import */
signUp('12345');
login();