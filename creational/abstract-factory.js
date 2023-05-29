// Soyut fabrika arayüzü
class ArabaParcaFabrikasi {
  olusturLastik() {}
  olusturDireksiyon() {}
}

// Alt fabrika sınıfları
class AudiParcaFabrikasi extends ArabaParcaFabrikasi {
  olusturLastik() {
    return new AudiLastik();
  }
  olusturDireksiyon() {
    return new AudiDireksiyon();
  }
}

class BMWParcaFabrikasi extends ArabaParcaFabrikasi {
  olusturLastik() {
    return new BMWLastik();
  }
  olusturDireksiyon() {
    return new BMWDireksiyon();
  }
}

// Üst sınıf - Lastik
class Lastik {
  constructor() {}
}

// Alt sınıflar - AudiLastik ve BMWLastik
class AudiLastik extends Lastik {
  constructor() {
    super();
    console.log("Audi lastik üretildi.");
  }
}

class BMWLastik extends Lastik {
  constructor() {
    super();
    console.log("BMW lastik üretildi.");
  }
}

// Üst sınıf - Direksiyon
class Direksiyon {
  constructor() {}
}

// Alt sınıflar - AudiDireksiyon ve BMWDireksiyon
class AudiDireksiyon extends Direksiyon {
  constructor() {
    super();
    console.log("Audi direksiyon üretildi.");
  }
}

class BMWDireksiyon extends Direksiyon {
  constructor() {
    super();
    console.log("BMW direksiyon üretildi.");
  }
}

// İstemci
class ArabaParcaUretim {
  constructor(fabrika) {
    this.fabrika = fabrika;
  }

  lastikUret() {
    const lastik = this.fabrika.olusturLastik();
    // Lastik üzerinde işlemler yapabilir veya döndürebilir
    return lastik;
  }

  direksiyonUret() {
    const direksiyon = this.fabrika.olusturDireksiyon();
    // Direksiyon üzerinde işlemler yapabilir veya döndürebilir
    return direksiyon;
  }
}

// İstemci tarafından fabrikanın belirlenmesi
const audiFabrika = new AudiParcaFabrikasi();
const audiParcaUretim = new ArabaParcaUretim(audiFabrika);

const audiLastik = audiParcaUretim.lastikUret(); // Audi lastik üretildi.
const audiDireksiyon = audiParcaUretim.direksiyonUret(); // Audi direksiyon üretildi.

const bmwFabrika = new BMWParcaFabrikasi();
const bmwParcaUretim = new ArabaParcaUretim(bmwFabrika);

const bmwLastik = bmwParcaUretim.lastikUret(); // BMW lastik üretildi.
const bmwDireksiyon = bmwParcaUretim.direksiyonUret(); // BMW direksiyon üret
