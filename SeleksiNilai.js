function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // Validasi jumlah data dalam dataArray harus lebih dari 5
  if (dataArray.length <= 5) {
    return console.log("Jumlah angka dalam data Array harus lebih dari 5");
  }

  // Validasi nilaiAwal harus kurang dari nilaiAkhir
  if (nilaiAwal >= nilaiAkhir) {
    return console.log("Nilai akhir harus lebih besar dari nilai awal");
  }

  // Filter data yang sesuai dengan kriteria dan urutkan
  const hasilSeleksi = dataArray
    .filter((data) => data > nilaiAwal && data < nilaiAkhir)
    .sort((a, b) => a - b);

  // Tampilkan hasil seleksi
  if (hasilSeleksi.length > 0) {
    console.log(hasilSeleksi);
  } else {
    console.log("Nilai tidak ditemukan");
  }
}

SeleksiNilai(90,10,[9,5,6,3,8,10])
