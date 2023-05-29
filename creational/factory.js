class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }

  tanit() {
    console.log(`Bu araba ${this.marka} marka ve modeli ${this.model}.`);
  }
}

// Alt sınıflar - SedanAraba ve SUVAraba
class SedanAraba extends Araba {
  constructor(marka, model) {
    super(marka, model);
  }
}

class SUVAraba extends Araba {
  constructor(marka, model) {
    super(marka, model);
  }
}

// Fabrika sınıfı
class ArabaFabrikasi {
  static arabaOlustur(tur, marka, model) {
    if (tur === "sedan") {
      return new SedanAraba(marka, model);
    } else if (tur === "suv") {
      return new SUVAraba(marka, model);
    } else {
      throw new Error("Geçersiz araba türü.");
    }
  }
}

// İstemci tarafından alt sınıfın belirlenmesi
const sedanAraba = ArabaFabrikasi.arabaOlustur("sedan", "X Marka", "Model A");
sedanAraba.tanit(); // Bu araba X Marka marka ve modeli Model A.

const suvAraba = ArabaFabrikasi.arabaOlustur("suv", "Y Marka", "Model B");
suvAraba.tanit(); // Bu araba Y Marka marka ve modeli Model B.
