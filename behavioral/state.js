/**
 * 
State deseni, bir nesnenin davranışını içsel durumuna bağlı olarak değiştirmesini sağlayan bir tasarım desenidir. Nesne, farklı durumlar arasında geçiş yaparak her durum için özelleştirilmiş davranışlar sergileyebilir.
 */
class TableState {
  handleCellClick() {
    throw new Error("handleCellClick() method must be implemented");
  }
}

// İlk durumu temsil eden somut sınıf
class EmptyCellState extends TableState {
  handleCellClick() {
    console.log("Bu hücre boş, bir veri ekleyin");
  }
}

// Dolu durumu temsil eden somut sınıf
class FilledCellState extends TableState {
  handleCellClick() {
    console.log("Bu hücre dolu, veriyi düzenleyin");
  }
}

// Kontrol edilecek tablo nesnesi
class Table {
  constructor() {
    this.currentState = new EmptyCellState();
  }

  setCellState(state) {
    this.currentState = state;
  }

  handleCellClick() {
    this.currentState.handleCellClick();
  }
}

// Kullanım
const table = new Table();
table.handleCellClick(); // Output: Bu hücre boş, bir veri ekleyin

table.setCellState(new FilledCellState());
table.handleCellClick(); // Output: Bu hücre dolu, veriyi düzenleyin
/**
 * Duruma dayalı davranış: Nesnenin durumu değiştiğinde otomatik olarak uygun davranışa geçiş yapılır.
Durum değişikliklerinin kolay yönetimi: Durumlar ayrı sınıflarda temsil edildiği için yeni durumlar eklemek veya mevcut durumları değiştirmek kolaydır.
Duruma özgü davranışlar: Her durum için özelleştirilmiş davranışlar belirtilebilir, böylece kod tekrarından kaçınılır.
Durum değişikliklerinin merkezi kontrolü: Durum değişikliklerini yönetmek için tek bir noktaya odaklanılır, bu da daha kolay bir kontrol sağlar.
Sürdürülebilirlik ve esneklik: Durum değişikliklerini kolayca yönetebilir ve yeni durumlar ekleyebilirsiniz, mevcut kodu değiştirmeye gerek kalmaz.
Kod okunabilirliği: Durumlar ve ilgili davranışlar ayrı sınıflarda yer aldığından kod daha okunabilir hale gelir.
 */