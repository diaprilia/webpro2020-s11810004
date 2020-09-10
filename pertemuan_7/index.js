//conditional //

let nilaiDiaprilia = 95;

if (nilaiDiaprilia > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiDiaprilia >= 60 && nilaiDiaprilia <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("TETAP SEMANGAT, COBA LAGI!");
}


//if,else if dan else
let nilaiDiaprilia = 95;

if (nilaiDiaprilia > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiDiaprilia >= 60 && nilaiDiaprilia <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("TETAP SEMANGAT, COBA LAGI!");
}

//penggunaan switch case //


let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}


//loop

const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };
 for (x in buku) {
   console.log(x, ':', buku[x]);
 }
//
//penggunaan while
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// Do while loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);