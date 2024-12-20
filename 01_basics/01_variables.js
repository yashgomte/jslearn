const accountId = 144553
let accountEmail = "yashgomte@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;

// accountId = 5 // not allowed

accountEmail = "yg@gmail.com"
accountPassword = "12321"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
