/*
Iterator deseni, bir koleksiyonun elemanlarına erişmek ve elemanları üzerinde döngü oluşturmak için kullanılan bir tasarım desenidir.
*/
// Iterator arabirimi
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    const item = this.collection[this.index];
    this.index++;
    return item;
  }
}

// Koleksiyon olarak insanlar
class InsanCollection {
  constructor() {
    this.insanlar = [];
  }

  addInsan(insan) {
    this.insanlar.push(insan);
  }

  createIterator() {
    return new Iterator(this.insanlar);
  }
}

// İnsan sınıfı
class Insan {
  constructor(isim, soyisim) {
    this.isim = isim;
    this.soyisim = soyisim;
  }
}

// Kullanım örneği
const insanCollection = new InsanCollection();
insanCollection.addInsan(new Insan('Ahmet', 'Yılmaz'));
insanCollection.addInsan(new Insan('Ayşe', 'Kara'));
insanCollection.addInsan(new Insan('Mehmet', 'Demir'));

const iterator = insanCollection.createIterator();

while (iterator.hasNext()) {
  const insan = iterator.next();
  console.log(insan.isim, insan.soyisim);
}
// iterator donguyu tek bir noktadan kontrolunu saglar orneğin bir iterator 20 colectionda kullanılsın bu 20 collection tek bir noktadan izleme ve kontrol yapmamıza olanak saglar.
//dagınık olan donguyu tek bir yerde toplayıp kontrol icin kullanılır.
