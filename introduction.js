// contoh scopee pada var, let const
//**********************************************/

// var lastName = undifined
// var firstName = 'redha'
// global scope
if(true) {
  var lastName = "definto"
  console.log(lastName)
}

// console.log(lastName)
// dia akan mengabil data dari lastName yang ada di local scope

// let 
// global scope
let time = 10.00
if (true) {
  // local scope
  let age = 19
  console.log(age)
}
// age akan error karna terhalang oleh local scope let
// console.log(age)

// const 
const country = "jakarta"
if (true) {
  // local scope
  const city = "padang"
  console.log(city)
}
// city akan error karna terhalang oleh local scope const
// console.log(city)