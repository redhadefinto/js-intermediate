// contoh scopee pada var, let const
//**********************************************/

// var lastName = undifined
// console.log(lastName)
// global scope
// var firstName = 'redha'
// console.log(firstName)
if(true) {
  var lastName = "definto"
  // console.log(lastName)
  for (var i = 0; i < 5; i++) {
    // console.log(i)
  }
  // console.log(i)
}
// console.log(lastName)
// dia akan mengabil data dari lastName yang ada di local scope

// let 
// global scope
let time = 10.00
// console.log(time)
if (true) {
  // local scope
  let age = 19
  // console.log(age)
  for(let i = 0; i < 5; i++) {
    // block scope
    // console.log(i)
  }
  // console.log(i)
}
// age akan error karna terhalang oleh local scope let
// console.log(age)

// const 
const country = "jakarta";
// console.log(country)
if (true) {
  // local scope
  const city = "padang"
  // console.log(city)
  if(true) {
    const provinsi = 'Sumatera Barat';
    // console.log(provinsi)
  }
  // console.log(provinsi)
}
// city akan error karna terhalang oleh local scope const
// console.log(city)