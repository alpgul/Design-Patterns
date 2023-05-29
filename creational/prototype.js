// Üst sınıf - Araba
class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }

  tanit() {
    console.log(`Bu araba ${this.marka} marka ve modeli ${this.model}.`);
  }

  clone() {
    // Prototip nesnesinin kopyasını oluşturmak için Object.create kullanılır
    return Object.create(this);
  }
}

// İstemci tarafından oluşturulan bir Araba prototipi
const arabaPrototipi = new Araba("X Marka", "Model A");

// İstemci, prototip nesnesinden kopyalar oluşturabilir
const araba1 = arabaPrototipi.clone();
araba1.tanit(); // Bu araba X Marka marka ve modeli Model A.

const araba2 = arabaPrototipi.clone();
araba2.marka = "Y Marka";
araba2.model = "Model B";
araba2.tanit(); // Bu araba Y Marka marka ve modeli Model B.
console.log(araba1 == arabaPrototipi);
