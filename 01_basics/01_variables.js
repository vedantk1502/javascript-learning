const accountId = 150220
let accountEmail = "vedant@email.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "Vedant"
accountPassword = "150220"

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/


console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])