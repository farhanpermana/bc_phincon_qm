function hitungBilanganGanjil(n) {
  return Math.floor(n / 2);
}
console.log(hitungBilanganGanjil(10));
console.log(hitungBilanganGanjil(20));

function cekTahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(cekTahunKabisat(2020));
console.log(cekTahunKabisat(2021));

function hitungFaktoral(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * hitungFaktoral(n - 1);
  }
}
console.log(hitungFaktoral(5));
console.log(hitungFaktoral(0));

function cariBilanganPrima(n) {
  let bilanganPrima = [];
  for (let i = 2; i <= n; i++) {
    let isPrima = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrima = false;
        break;
      }
    }
    if (isPrima) {
      bilanganPrima.push(i);
    }
  }
  return bilanganPrima;
}
console.log(cariBilanganPrima(20));

function hitungJumlahDigit(angka) {
  let jumlah = 0;
  while (angka > 0) {
    jumlah += angka % 10;
    angka = Math.floor(angka / 10);
  }
  return jumlah;
}
console.log(hitungJumlahDigit(12345));
console.log(hitungJumlahDigit(9876));

function cekPalindrom(kata) {
  const reversedKata = kata.split("").reverse().join("");
  return kata === reversedKata;
}
console.log(cekPalindrom("malam"));

function hitungPangkat(angka, pangkat) {
  if (pangkat === 0) {
    return 1;
  } else {
    return angka * hitungPangkat(angka, pangkat - 1);
  }
}
console.log(hitungPangkat(3,7));

let a = 10;
let b = a;
b = 20;
console.log(a);

let objA = { nama: "Farhan" };
let objB = objA;
objB.nama = "Rizky";
console.log(objA.nama);

let arrA = [1, 2, 3];
let arrB = arrA;
arrB.push(6);
console.log(arrA);

let students = [
  { name: "Farhan", score: 85 },
  { name: "Rizky", score: 90 },
  { name: "Diana", score: 78 },
];

let studentsDeepCopy = JSON.parse(JSON.stringify(students));
studentsDeepCopy[0].score = 100;
console.log(studentsDeepCopy[0].score);

let studentsShallowCopy = [...students];
studentsShallowCopy[0].score = 95; 
