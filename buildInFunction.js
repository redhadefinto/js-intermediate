// Concat
// concat array method dan string method
// concat akan menggabungkan 2 atau lebih array dan menghasilkan array baru
// concat memiliki parameter sebanyak yang ingin di gabungkan (parameter1, parameter2, ....)
const Numbers1 = [1,2,3];
console.log(`Concat`)
console.log(`before 1`, Numbers1)
const Numbers2 = [4,5,6];
console.log(`before 1`, Numbers2)
const concatResult = Numbers1.concat(Numbers2);
console.log(`after 1`, Numbers1)
console.log(`after 1`, Numbers2)
console.log(`output`, concatResult)
// non mutasi
// output akan menghasil array baru


// Every
// every akan mengecek pada seluruh isi array apakah memenuhi suatu kondisi yang di tentukan. 
// every memiliki paramter yaitu (callback)
// Method array
const every = [5, 10, 3]
console.log(`every`)
console.log(`before`, every)
const everyResult = every.every(num => num > 2)
console.log(`after`, every)
console.log(`output: `, everyResult)
// nonmutasi
// output akan menghasilkan nilai boolean


// Filter 
// filter akan mencari keseluhan dari isi array dan mengecek keadaan kondisi tertentu
// jika kondisinya tidak sesuai maka return nya hanya []
// filter memiliki parameter yaitu (callback)
// method array
const Filter = [10, 5, 8, 2, 16, 1];
console.log(`filter`)
console.log(`Before: `, Filter)
const filterResult = Filter.filter(num => num > 12)
console.log(`After: `, Filter)
console.log(`Output:`, filterResult)
// nonmutasi
// output akan menghasilkan array baru sesuai kondisi tertentu

// Find
// find akan mencari pada array yang pertama kali di temukan sesuai seusai kondisi tertentu
// jika kondisi tidak sesuai maka akan menghasilkan nilai undifined
// find memiliki parameter yaitu (callback)
// method array
const Find = [2, 5, 8, 11, 30, 1];
console.log(`find`)
console.log(`Before: `, Find)
const findResult = Find.find(num => num > 10)
console.log(`After: `, Find)
console.log(`output`, findResult)
// nonMutasi
// output akan menghasilkan nilai baru

// Pop
// Array method
// pop digunakan untuk menghapus isi terakhir dari array
// mehtod array
const country = ['indonesia', 'jepang', 'singapura']
console.log(`pop`)
console.log(`before: ${country}`);
const resultPop = country.pop();
console.log(`After: ${country}`)
console.log(`output: `, country)
// mutasi
// output akan menghasilkan nilai kembalian dari array asalnya

// shift
// array method
// method ini digunakan untuk menghapus array dari urutan pertama
const city = ['jakarta', 'padang', 'palembang'];
// console.log(`shift`)
// console.log(`before: ${city}`)
const resultShift = city.shift()
// console.log(`after: ${city}`)
// console.log(`output: ${resultShift}`)
// mutasi
// output akan menghasilkan tipe data sesuai data awal dari arraynya

// Unshift
// Array method
// Method ini untuk menambahkan data dari urutan pertama array
// memiliki parameter (..., ...)
const pelajaran = ["mtk", 'ipa', 'bInggris', 'bIndonesia'];
// console.log(pelajaran)
const resultPelajaran = pelajaran.unshift("olahraga", "seni")
// console.log(pelajaran)
// console.log(`output: ${resultPelajaran}`)
// mutasi
// Outputnya mengembalikan panjang array yang baru


// ToString
// Array method
// Method ini mengubah tipe data array menjadi type data string
const fullName = ['redha', 'definto']
// console.log(fullName)
const resultToString = fullName.toString();
// console.log(fullName)
// console.log(resultToString)
// nonMutasi
// output akan menghasil tipe data string

// hasOwnProperty 
// object method
// method ini mengecek apakah di dalam object tersebut memiliki property yang kita cari
// property memiliki parameter ("yang akan di cari")
const myName = {
  firstName: "Redha",
  lastName: "Definto"
}
// console.log(myName)
const resultHOP = myName.hasOwnProperty("firstName")
// console.log(myName)
// console.log(resultHOP)
// nonMutasi
// output akan menghasilkan tipe data boolean

// Reduce
// method array
// method ini melakukan aksi tertantu pada setiap isi array kemudian menghasil satu nilai output
// reduce((accumulator, currentValue, currentIndex(op), array(op)) => { /* … */ }, initialValue(op))
const age = [18, 20, 24]
// console.log(age)
// const resultAge = age.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
const resultAge = age.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
// console.log(age)
// console.log(resultAge)

// nonmutasi
// output bisa berupa tipe data apa saja