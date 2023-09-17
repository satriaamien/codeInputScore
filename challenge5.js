// # TUGAS
// - buatlah sistem yang menerima user input berupa nilai mata kuliah
// - ubahlah nilai tersebut dari angka menjadi huruf dari A sampai F
// - user tidak boleh menginput angka dibawah 0 atau di atas 100

const prompt = require("prompt-sync")();

let inputan = prompt("masukkan nilai :");

while (inputan > 100 || inputan < 0) {
  inputan = prompt("input salah, masukkan nilai :");
}
if (inputan <= 100 && inputan >= 80) {
  console.log("Nilai A");
} else if (inputan < 80 && inputan >= 70) {
  console.log("Nilai B");
} else if (inputan < 70 && inputan >= 50) {
  console.log("Nilai C");
} else if (inputan < 50 && inputan >= 40) {
  console.log("Nilai D");
} else if (inputan < 40 && inputan >= 30) {
  console.log("Nilai E");
} else if (inputan < 30 && inputan >= 0) {
  console.log("Nilai F");
}
