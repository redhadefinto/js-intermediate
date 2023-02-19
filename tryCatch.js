const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja('senin').then((day) => {
  return console.log(`hari ${day} hari kerja`);
}).catch((e) => {
  console.log(e.message)
})

const cekTryCatch = async (day) => {
  try {
    await cekHariKerja(day)
    console.log(`hari ${day} hari kerja`)
  } catch (error) {
    console.log(error.message);
  }
}

cekTryCatch('minggu')


/*
  Tugas JS 3 No 4
**/

// const tugas = (input) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = "Tugas berhasil di kerjakan";
//       if(input) {
//         resolve(result)
//       }else {
//         reject(new Error('hari ini tidak mengerjakan tugas'))
//       }
//     }, 4000)
//   })
// }

// tugas(true).then((input) => console.log(input)).catch((e) => console.log(e.message))

// const cekTugas = async (input) => {
//   try {
//     return console.log(await tugas(input))
//   } 
//   catch (e) {
//     console.log(e.message)
//   }
// }

// cekTugas(true)

// const cekLulus = (nilai) => {
//   // if (nilai > 100) {
//   //   return console.log('input yang anda masukan tidak boleh lebih dari 100')
//   // } else if (nilai < 0) {
//   //   return console.log('input yang anda masukan tidak boleh lebih kecil dari 0')
//   // }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = ''
//       const lulus = 'anda lulus'
//       if (nilai > 100) {
//         return console.log(
//           "input yang anda masukan tidak boleh lebih dari 100"
//         );
//       } else if (nilai < 0) {
//         return console.log('input yang anda masukan tidak boleh lebih kecil dari 0')
//       }
//       if(nilai >= 75) {
//         result = true
//       }
//       if(result) {
//         resolve(lulus)
//       } else {
//         reject(new Error('Maaf anda tidak lulus'))
//       }
//     }, 5000)
//   })
// }

// cekLulus(90).then((nilai) => {
//   console.log(nilai)
// }).catch((e) => {
//   console.log(e.message)
// })