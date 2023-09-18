// # TUGAS 5
// - buatlah sistem yang menerima user input berupa nilai mata kuliah
// - ubahlah nilai tersebut dari angka menjadi huruf dari A sampai F
// - user tidak boleh menginput angka dibawah 0 atau di atas 100

function CheckError(inputan) {
  const prompt = require("prompt-sync")();
  let isError = true;
  let nilai;

  while (isError) {
    isNaN(parseInt(inputan)) ? "" : (inputan = parseInt(inputan));

    const errorMsg = ErrorCase(inputan);
    if (errorMsg) {
      inputan = prompt("masukkan nilai : ");
    } else {
      nilai = TestNilai(inputan);
      isError = false;
    }
  }
  return nilai;
}

function ErrorCase(getInput) {
  if (getInput > 100) {
    throw new "inputan lebih dari 100"();
  } else if (getInput < 0) {
    throw new "inputan kurang dari 0"();
  } else if (getInput === "") {
    throw new Error("inputan kosong");
  } else if (typeof getInput !== "number") {
    throw new Error("inputan harus angka");
  }
}

function TestNilai(inputan) {
  // const prompt = require("prompt-sync")();
  // let inputan = prompt("masukkan nilai :");

  // while (inputan > 100 || inputan < 0) {
  //   inputan = prompt("input salah, masukkan nilai :");
  // }
  if (inputan <= 100 && inputan >= 80) {
    return "grade A";
  } else if (inputan < 80 && inputan >= 70) {
    return "grade B";
  } else if (inputan < 70 && inputan >= 50) {
    return "grade C";
  } else if (inputan < 50 && inputan >= 40) {
    return "grade D";
  } else if (inputan < 40 && inputan >= 30) {
    return "grade E";
  } else if (inputan < 30 && inputan >= 0) {
    return "grade F";
  }
}
module.exports = CheckError;
