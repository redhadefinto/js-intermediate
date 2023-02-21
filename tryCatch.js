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
  return console.log(`Hari ${day} hari kerja`);
}).catch((e) => {
  console.log(e.message)
})

// then digunakan untuk menangani nilai kembalian dari promise ketika promise berhasil (resolve), sedangkan catch digunakan untuk menangani nilai kembalian dari promise ketika promise gagal (rejected).

const cekTryCatch = async (day) => {
  try {
    await cekHariKerja(day)
    console.log(`Hari ${day} hari kerja`)
  } catch (error) {
    console.log(error.message);
  }
}

// try digunakan untuk menandai blok kode yang akan diuji atau dijalankan, sedangkan catch digunakan untuk menangani kesalahan atau error yang mungkin terjadi pada blok kode yang ditandai oleh try. Dalam blok catch, kita dapat mengeksekusi kode yang ingin dijalankan ketika terjadi error.

cekTryCatch('minggu')