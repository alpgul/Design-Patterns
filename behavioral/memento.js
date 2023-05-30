/**
 * Memento deseni, nesneler arasındaki sıkı bağımlılığı azaltır ve nesnenin iç durumunu başka bir nesnenin yönetmesini sağlar. Bu sayede, kodun daha düzenli olmasını ve nesnelerin geçmiş durumlarına erişimin daha kolay ve kontrol edilebilir olmasını sağlar.
 */
// Originator sınıfı
class TextEditor {
  constructor() {
    this.text = "";
  }

  setText(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  createMemento() {
    return new Memento(this.text);
  }

  restoreFromMemento(memento) {
    this.text = memento.getState();
  }
}

// Memento sınıfı
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Caretaker sınıfı
class HistoryManager {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  saveState(editor) {
    const memento = editor.createMemento();
    this.history.push(memento);
    this.currentIndex++;
  }

  undo(editor) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const memento = this.history[this.currentIndex];
      editor.restoreFromMemento(memento);
    }
  }

  redo(editor) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const memento = this.history[this.currentIndex];
      editor.restoreFromMemento(memento);
    }
  }
}

// Kullanım
const editor = new TextEditor();
const historyManager = new HistoryManager();

editor.setText("Lorem ipsum dolor sit amet.");

// Durumu kaydet
historyManager.saveState(editor);

editor.setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

// Durumu kaydet
historyManager.saveState(editor);

console.log(editor.getText()); // Çıktı: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

// Geri alma işlemi
historyManager.undo(editor);

console.log(editor.getText()); // Çıktı: Lorem ipsum dolor sit amet.

// İleri alma işlemi
historyManager.redo(editor);

console.log(editor.getText()); // Çıktı: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

//bir nevi nesnenin değerlerini bir colection kaydetme denilebilir.bu bize nesnenin verileri arasında gezinmemizi ve yonentmemizi saglar bir nesne olsun bu nesne uzerinde yapılan değişikleri geri getirme veya ileri sarma gibi yontemlerle nesne uzerinde veri korunması ve tekrar kullabilirliği sağlamasında fayda sağlar
//Bu desen, nesnenin iç durumunu saklamak ve geri alma/ileri alma işlemlerini yönetmek için kullanılır
