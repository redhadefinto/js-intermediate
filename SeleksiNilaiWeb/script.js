function SeleksiNilai() {
  const nilaiAwal = Number(document.getElementById("nilaiAwal").value);
  const styleNilaiAwal = document.getElementById("nilaiAwal");
  const nilaiAkhir = Number(document.getElementById("nilaiAkhir").value);
  const styleNilaiAkhir = document.getElementById("nilaiAkhir");
  const styleArray = document.getElementById('data')
  const dataArray = document
  .getElementById("data")
  .value.split(",");
  Number(dataArray)
  const containerResult = document.getElementById('hasilSeleksi');
  // Style Border
  if(nilaiAwal == '' && nilaiAkhir == '' && dataArray == '') {
    styleNilaiAwal.style.border = '2px solid red';
    styleNilaiAkhir.style.border = '2px solid red';
    styleArray.style.border = '2px solid red'
    return containerResult.innerHTML = 'Nilai Harus di isi'
  } else if (nilaiAwal == '') {
    styleNilaiAwal.style.border = '2px solid red';
    styleNilaiAkhir.style.border = '0px'
    styleArray.style.border = '0px'
    return containerResult.innerHTML = 'Nilai harus di isi';
  } else if (nilaiAkhir == '') {
    styleNilaiAwal.style.border = '0px';
    styleNilaiAkhir.style.border = '2px solid red'
    styleArray.style.border = '0px'
    return containerResult.innerHTML = 'Nilai harus di isi';
  }
  if(nilaiAwal.length > 0) {
    styleNilaiAwal.style.border = '0px'
  }
  // Validasi nilaiAwal harus kurang dari nilaiAkhir
  if (nilaiAwal > nilaiAkhir) {
    styleNilaiAwal.style.border = "2px solid red";
    styleNilaiAkhir.style.border = "2px solid red";
    styleArray.style.border = "0px";
    containerResult.innerHTML = "Nilai akhir harus lebih besar dari nilai awal";
    return;
  }
  // Validasi jumlah data dalam dataArray harus lebih dari 5
  if (dataArray.length < 5) {
    styleNilaiAwal.style.border = "0px";
    styleNilaiAkhir.style.border = "0px";
    styleArray.style.border = "2px solid red";
    containerResult.innerHTML = "Jumlah angka dalam data harus lebih dari 5";
    return;
  }
  dataArray.forEach((data) => {
    if(Number(data)) {
      // Filter data yang sesuai dengan kriteria dan urutkan
      const hasilSeleksi = dataArray
        .filter((data) => data > nilaiAwal && data < nilaiAkhir)
        .sort((a, b) => a - b);

      // Tampilkan hasil seleksi
      if (hasilSeleksi.length > 0) {
        styleNilaiAwal.style.border = "0";
        styleNilaiAkhir.style.border = "0";
        styleArray.style.border = "0px";
        containerResult.innerHTML = `Hasil seleksi: ${hasilSeleksi}`;
        return;
      } else {
        styleNilaiAwal.style.border = "0";
        styleNilaiAkhir.style.border = "0";
        styleArray.style.border = "0px";
        containerResult.innerHTML = "Nilai tidak ditemukan";
        return
      }
    } else {
      styleNilaiAwal.style.border = "0";
      styleNilaiAkhir.style.border = "0";
      styleArray.style.border = '2px solid red';
      return containerResult.innerHTML = `Semua data harus berisikan angka`
    }
  })
}
