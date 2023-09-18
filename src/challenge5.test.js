const expect = require("chai").expect;
const grade = require("./challenge5");

// # TUGAS
// - di dalam folder project tugas membuat konversi nilai yang telah kalian buat sebelumnya, silahkan install mocha dan chai
// - buat unit test untuk menguji programnya berjalan sesuai dengan ekspektasi atau tidak
// - sebelum membuat test, buat kodenya agar bisa di test (contoh: pisahkan logic yang isinya if dan prompt/while, hasil dari if nya di return)
// - buat positve dan negative test nya, terutama di bagian ketika kosong, atau nilainya diluar batas, atau tipe datanya salah

describe("FT_001_CALCULATE", () => {
  //positif
  describe("CALCULATE_001 percobaan grade A", () => {
    it("hasil A with value 80", () => {
      const result = grade(80);
      expect(result).equal("grade A");
    });
  });
  describe("CALCULATE_002 percobaan grade B", () => {
    it("hasil B with value 75", () => {
      const result = grade(75);
      expect(result).equal("grade B");
    });
  });
  describe("CALCULATE_003 percobaan grade C", () => {
    it("hasil C with value 65", () => {
      const result = grade(65);
      expect(result).equal("grade C");
    });
  });
  describe("CALCULATE_004 percobaan grade D", () => {
    it("hasil D with value 45", () => {
      const result = grade(45);
      expect(result).equal("grade D");
    });
  });
  describe("CALCULATE_005 percobaan grade E", () => {
    it("hasil E with value 35", () => {
      const result = grade(35);
      expect(result).equal("grade E");
    });
  });
  describe("CALCULATE_006 percobaan grade F", () => {
    it("hasil F with value 15", () => {
      const result = grade(15);
      expect(result).equal("grade F");
    });
  });
  //negatif
  describe("CALCULATE_007 percobaan input tipe data string", () => {
    it("keluar output tipe data harus number", () => {
      const result = () => grade("sepuluh");
      expect(result).to.throw("inputan harus angka");
    });
  });
  //negatif
  describe("CALCULATE_008 percobaan input lebih dari 100", () => {
    it("keluar output lebih dari 100", () => {
      const result = () => grade(102);
      expect(result).to.throw("inputan lebih dari 100");
    });
  });
  describe("CALCULATE_009 percobaan input kurang dari 0", () => {
    it("keluar output kurang dari 0", () => {
      const result = () => grade(-1);
      expect(result).to.throw("inputan kurang dari 0");
    });
  });
  describe("CALCULATE_010 percobaan input kosong", () => {
    it("keluar output inputan kosong", () => {
      const result = () => grade("");
      expect(result).to.throw("inputan kosong");
    });
  });
});
