/* module types

common js module => require
es module => default export


*/

// const { login, signUp } = require("./auth1")

// login();
// signUp();


// const auth = require("./auth1");
// auth.login();
// auth.signUp();


import { login, signUp } from "./es-module-auth.js"
login();
signUp();




