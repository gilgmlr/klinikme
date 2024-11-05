const express = require('express');
const app = express();
const port = 3000;

// Himpunan Bilangan Asli
const himpunan = [83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8];

// Helper function: menghitung jumlah anggota
function hitungJumlahAnggota(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}

// Helper function: mencari anggota terkecil
function cariAnggotaTerkecil(arr) {
  let terkecil = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < terkecil) {
      terkecil = arr[i];
    }
  }
  return terkecil;
}

// Helper function: mencari anggota terbesar
function cariAnggotaTerbesar(arr) {
  let terbesar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }
  }
  return terbesar;
}

// Helper function: mencari angka dengan frekuensi lebih dari satu
function cariAnggotaFrekuensiLebihDariSatu(arr) {
  const frekuensi = {};
  const hasil = [];

  for (let i = 0; i < arr.length; i++) {
    const angka = arr[i];
    if (frekuensi[angka]) {
      frekuensi[angka]++;
    } else {
      frekuensi[angka] = 1;
    }
  }

  for (let angka in frekuensi) {
    if (frekuensi[angka] > 1) {
      hasil.push(Number(angka));  // Convert string keys back to numbers
    }
  }

  return hasil;
}

// Helper function: menghitung jumlah bilangan ganjil dan genap
function hitungGanjilGenap(arr) {
  let ganjil = 0;
  let genap = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      ganjil++;
    } else {
      genap++;
    }
  }

  return { ganjil, genap };
}

// Helper function: mengelompokkan bilangan ganjil dan genap
function kelompokkanGanjilGenap(arr) {
  const ganjil = [];
  const genap = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      ganjil.push(arr[i]);
    } else {
      genap.push(arr[i]);
    }
  }

  return { ganjil, genap };
}

// Helper function: mengurutkan array dari kecil ke besar (tanpa built-in sort)
function urutkan(arr) {
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] > sortedArr[j]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }
  return sortedArr;
}

// Endpoint 1: Menghitung jumlah anggota
app.get('/jumlah-anggota', (req, res) => {
  const jumlah = hitungJumlahAnggota(himpunan);
  res.json({ jumlah });
});

// Endpoint 2: Menampilkan anggota terkecil
app.get('/anggota-terkecil', (req, res) => {
  const terkecil = cariAnggotaTerkecil(himpunan);
  res.json({ terkecil });
});

// Endpoint 3: Menampilkan anggota terbesar
app.get('/anggota-terbesar', (req, res) => {
  const terbesar = cariAnggotaTerbesar(himpunan);
  res.json({ terbesar });
});

// Endpoint 4: Menampilkan angka dengan frekuensi lebih dari satu
app.get('/frekuensi-lebih-dari-satu', (req, res) => {
  const hasil = cariAnggotaFrekuensiLebihDariSatu(himpunan);
  res.json({ hasil });
});

// Endpoint 5: Menampilkan urutan anggota dengan frekuensi lebih dari satu setelah diurutkan
app.get('/urutan-frekuensi', (req, res) => {
  const hasil = cariAnggotaFrekuensiLebihDariSatu(himpunan);
  const urutan = urutkan(hasil);
  res.json({ urutan });
});

// Endpoint 6: Menghitung jumlah bilangan ganjil dan genap
app.get('/hitung-ganjil-genap', (req, res) => {
  const { ganjil, genap } = hitungGanjilGenap(himpunan);
  res.json({ ganjil, genap });
});

// Endpoint 7: Mengelompokkan bilangan ganjil dan genap
app.get('/kelompokkan-ganjil-genap', (req, res) => {
  const { ganjil, genap } = kelompokkanGanjilGenap(himpunan);
  res.json({ ganjil, genap });
});

// Menjalankan server pada port 8080
app.listen(port, () => {
  console.log(`Server Gilang berjalan di http://localhost:${port}`);
});
