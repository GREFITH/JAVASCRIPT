const accountId =145534
let accountEmail = "sdd@gmail.com"
var accountPassword = "21341"
accountCity = "Jaipur"
let accountstate;

// accountId = 2 // not allowed

accountEmail = "sa@das.com"
accountPassword = "3421"
accountCity = "gof"

console.log(accountId);

/*
Prefer not to use var
becuase of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])