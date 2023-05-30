/**
 * Strategy deseni, bir algoritmanın farklı varyasyonlarını soyutlama ve değiştirilebilir hale getirme amacıyla kullanılan bir tasarım desenidir.
 */
// Strategy arayüzü
class SortingStrategy {
  sort(data) {
    throw new Error("sort() method must be implemented");
  }
}

// Bubble Sort algoritması
class BubbleSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("Bubble Sort uygulandı");
    // Bubble Sort işlemleri...
  }
}

// Quick Sort algoritması
class QuickSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("Quick Sort uygulandı");
    // Quick Sort işlemleri...
  }
}

// Sıralama işlemlerini gerçekleştiren sınıf
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    this.strategy.sort(data);
  }
}

// Kullanım
const data = [5, 2, 8, 3, 1];

const bubbleSortStrategy = new BubbleSortStrategy();
const sorter = new Sorter(bubbleSortStrategy);
sorter.sort(data); // Output: Bubble Sort uygulandı

const quickSortStrategy = new QuickSortStrategy();
sorter.setStrategy(quickSortStrategy);
sorter.sort(data); // Output: Quick Sort uygulandı
/**
 * Strategy deseni, farklı algoritma veya işlem seçenekleri arasında geçiş yapma ve değiştirme esnekliği sağlar.
Kod tekrarını önler ve modüler bir yapı oluşturur.
Nesnenin davranışını çalışma zamanında değiştirebilme imkanı sağlar.
Her bir strateji, tek bir sorumluluğu temsil eder ve bağımsız olarak geliştirilebilir.
Uygulamanın gelecekteki değişikliklere adapte olabilmesini sağlar.
 */