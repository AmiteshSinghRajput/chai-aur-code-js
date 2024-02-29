const accountId = 144553
let accountEmail = "amitraj.com"
var accountPass = "1234"
accountCity = "Jaipur"

// accountId=2
accountEmail="hcac.com"
accountPass="21221"
accountCity="delhi"
let accountState;

console.log(accountId);

/*
PREFER NOT TO USE VAR 
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])