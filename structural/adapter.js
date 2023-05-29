//Adapter Pattern, farklı arabirimlere sahip olan sınıfları bir araya getirerek uyumlu çalışmalarını sağlayan bir tasarım desenidir
//orneğin yeni yazılan bir class icindeki metodlar eski kod fonksiyonlarıyla uyuşmuyorsa bu pattern kullanılır veya
// bir class yapısı değiştirmeden metoda yeni işlev veya bir düzeltme yapılmak istenirse bu pattern kullanılır boylece foksiyondaki değişim sadece class ismiyle sınırlandırırak siteme entegresi kolaylasır.
// Hedef Arabirim (Target Interface)
class Araba {
  sur() {
    throw new Error("sur() metodu implemente edilmelidir.");
  }
}

// Mevcut Sınıf (Adaptee)
class ArabaOtomasyonu {
  otomatikSurAc() {
    console.log("Araba otomatik sürme özelliği açıldı.");
  }

  otomatikSurKapat() {
    console.log("Araba otomatik sürme özelliği kapatıldı.");
  }
}

// Adapter Sınıfı
class ArabaAdapter extends Araba {
  constructor() {
    super();
    this.arabaOtomasyonu = new ArabaOtomasyonu();
  }

  sur() {
    this.arabaOtomasyonu.otomatikSurAc();
    console.log("Araba otomatik olarak sürülüyor.");
    this.arabaOtomasyonu.otomatikSurKapat();
  }
}

// İstemci
const araba = new ArabaAdapter();
araba.sur();
