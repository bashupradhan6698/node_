const bcrypt = require('bcrypt')


async function signUp(password) {
  // 1. take request from user
  // 2. validation
  // 3. encrypt password before storing in database

  // let hashed_password = await bcrypt.hash(password, 10); // synchronous
  // console.log(hashed_password)

  bcrypt.hash(password, 10, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash)
  });
  console.log('after hash')
}

const login = () => {
  console.log('login')
}

// module.exports = signUp //default export


// module.exports.login = login; //named export
// module.exports.signUp = signUp;


module.exports = { //named export
  'login': login,
  'signUp': signUp
}