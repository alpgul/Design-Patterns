/*
Proxy Pattern, bir nesneye dolaylı bir erişim sağlayan ve bu erişimi kontrol eden bir tasarım desenidir. Bu desen, gerçek nesnenin yerine geçerek onunla etkileşimde bulunan istemcilere ek işlevsellik sağlar.
*/
// Subject (Özne) arayüzü
class Image {
  display() {
    throw new Error("This method must be implemented by subclasses.");
  }
}

// Real Subject (Gerçek Özne)
class RealImage extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.loadImage();
  }

  loadImage() {
    console.log(`Loading image: ${this.filename}`);
  }

  display() {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy (Vekil)
class ImageProxy extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Kullanım örneği
const image1 = new ImageProxy("image1.jpg"); //nesne olusum maliyeti cok yuksek olduğunda proxy ile bu olusum maliyetini bu nesnenin gerekliliği olduğu zamana oteledik.
// bu otelstirme nesneyi olusturduğumuzda olacak olan yuksek bellek kullanımını engelledik ihtiyac zamanında bu bellek kullanımı gerceklesecektir.
//ayrıca proxyde tanımlayacağımız ek metodlar ile yeni ozellikler ekleyebiliriz ve bu ozellikleri gercek nesneyle ilişkilendirebiliriz.
image1.display(); // Gerçek görüntü yüklenir ve görüntülenir

const image2 = new ImageProxy("image2.jpg");
image2.display(); // Gerçek görüntü yüklenir ve görüntülenir

image1.display(); // Daha önce yüklenen gerçek görüntü direkt olarak görüntülenir
