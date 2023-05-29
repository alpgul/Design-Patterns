// Singleton sınıfı - Araba
class Araba {
  constructor(marka, model) {
    if (Araba.instance) {
      return Araba.instance;
    }

    this.marka = marka;
    this.model = model;

    Araba.instance = this;
  }

  tanit() {
    console.log(`Bu araba ${this.marka} marka ve ${this.model} model.`);
  }
}

// İstemci bir Araba örneği oluşturur
const araba1 = new Araba("X Marka", "Model A");
araba1.tanit(); // Bu araba X Marka marka ve Model A model.

// Başka bir örneği oluşturmayı denemek aynı örneği döndürecek
const araba2 = new Araba("Y Marka", "Model B");
araba2.tanit(); // Bu araba X Marka marka ve Model A model.
console.log(araba1 === araba2); // true
