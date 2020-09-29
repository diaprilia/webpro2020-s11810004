//Contoh Arrow Function

//const HargaPembelianBuku = (buku1, buku2) => {
    ///const hasil =  buku1 + buku2;
    //return hasil;
  //};
  
  //console.log(operasiPenjumlahan(50000, 75000)); // Output: 125000
  
  // fungsi yang tidak memiliki parameter
  //const NamaKucingPeliharaan = () => {
    //const kucing = ["Gaston", "Sonya"];
    //return kucing[Math.floor(Math.random()*(kucing.length))];
  //}
  
  //console.log(NamaKucingPeliharaan()); // Output: Gaston (hasil random)



  //Exercise
//convert to ES6 Syntax

const yearUntilRetirement = (year,firstName) => {
    var age=28;
    var retirement=65-age;
    if(retirement > 0){
      console.log(`${firstName} retired in ${retirement} years. `);
    }
    else{
      console.log(`${firstName} has already retired`);
    }
  }
  yearUntilRetirement(2035,'andi');