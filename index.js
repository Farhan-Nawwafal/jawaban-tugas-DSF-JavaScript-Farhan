// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//tipe data
let number = 10;
let angka = 100;
console.log(`Angka : ${angka}`);

let text = 'Halo, dunia!';
let isTrue = true;
console.log(`Is true : ${isTrue}`);
let isFalse = false;
console.log(`isFalse : ${isFalse}`);
let fruits = ['apel', 'mangga', 'pisang'];
console.log(fruits);
let person = { name: 'John', age: 25 };
console.log(person);

//operator
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
console.log(sum);
let isGreater = num1 > num2;
console.log(isGreater);
let isTrueAndFalse = true && false;
let assignment = 10;
assignment += 5;
let result = num1 > num2 ? 'Lebih besar' : 'Lebih kecil sama dengan';

//percabangan
let num = 10;

if (num > 0) {
  console.log('Angka positif');
} else if (num < 0) {
  console.log('Angka negatif');
} else {
  console.log('Angka nol');
}

console.log('===JAWABAN FARHAN===');

/* 
ASSIGMENT JAVASCRIPT
JAWABAN DARI FARHAN NAWWAFAL PRAMUDIA

Soal no 1 : Buatlah Hello World di Console Javascript
Soal no 2 : Buatlah function dengan nama "triangle" untuk menghitung luas segitiga 
Soal no 3 : Buatlah function untuk cek nilai triangle, bila > 100, maka akan tampil "Nilai Besar" dan bila < 100, maka tampil "Nilai Kecil".

Soal no 4 : Jawaban apa yang bernilai benar ?
4.a : `(true && false) || (false && true)
4.b : `(true || false) && (false || true)`
4.c : `!(false && true)`
*/

// Jawaban nomor 1 :
console.log('Hello World'); // done

// Jawaban nomor 2 dan 3:
function triangle(alas, tinggi) {
  // 1. deklarasi rumus luas segitiga
  const luasSegitiga = 0.5 * alas * tinggi;

  // 2. buat kondisinya. Gunakan konsep "Ternary Operator".
  const hasil = luasSegitiga > 100 ? 'Nilai Besar' : 'Nilai Kecil';

  // 3. tampilkan variable di console
  console.log(hasil);
}
triangle(8, 25); // done

// Jawaban nomor 4 :
/* 
Dalam konsep logika matematika, jika operator AND (&&) memiliki nilai true jika KEDUA NILAINYA bernilai "true". Selain itu, akan menghasilkan false.

Sedangkan, operator Pipe (||) akan menghasilkan true jika salah SATU NILAI bernilai true. Jika KEDUA NILAI bernilai false, maka hasil false.

Lalu, jika operator negasi (!) itu membalikkan atau menginverskan suatu nilai boolean. Misalnya :
const isTrue = true;
!(isTrue) --> hasilnya false.

Jadi jawaban :
=> 4.a : 
(true && false) || (false && true) = (false) || (false) = false

=> 4.b : 
(true || false) && (false || true) = (true) && (true) = true

=> 4.c :
!(false && true) = !(false) = true.
*/


