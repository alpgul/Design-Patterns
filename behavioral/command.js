/*
Command Pattern bir isteği bir nesne şeklinde kapsüller ve isteği yapmak isteyen nesneye aktarır. Bu desen, istekleri nesne şeklinde temsil ederek istek gönderen ve isteği alan nesneleri birbirinden bağımsız hale getirir.
*/
// Command sınıfı
class AddTextCommand {
  constructor(editor, text) {
    this.editor = editor;
    this.text = text;
  }

  execute() {
    this.editor.addText(this.text);
  }

  undo() {
    this.editor.deleteText(this.text);
  }
}

// Receiver sınıfı
class Editor {
  constructor() {
    this.content = "";
  }

  addText(text) {
    this.content += text;
  }

  deleteText(text) {
    this.content = this.content.replace(text, "");
  }

  printContent() {
    console.log("Content: " + this.content);
  }
}

// Invoker sınıfı
class TextEditor {
  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }

  undoCommand() {
    this.command.undo();
  }
}

// Kullanım örneği
const editor = new Editor();
const addCommand = new AddTextCommand(editor, "Hello, ");
const deleteCommand = new AddTextCommand(editor, "World!");

const textEditor = new TextEditor();
textEditor.setCommand(addCommand);
textEditor.executeCommand();

textEditor.setCommand(deleteCommand);
textEditor.executeCommand();

editor.printContent(); // Content: Hello,

textEditor.undoCommand();
editor.printContent(); // Content: Hello, World!


/*
command pattern bir komut fonksiyonunu nesneye donustur ve bu komut fonksiyonuna ait olan nesneyle olan ilişkisi olmadan bu komut dosyasını cagırabilir
bu da tek bir arayuzden sanki tum komutlar tek arayuzden turemis gibi cagırımını saglar
*/
// Command sınıfları
class AddItemCommand {
  constructor(shoppingCart, item) {
    this.shoppingCart = shoppingCart;
    this.item = item;
  }

  execute() {
    this.shoppingCart.addItem(this.item);
  }
}

class RemoveItemCommand {
  constructor(shoppingCart, item) {
    this.shoppingCart = shoppingCart;
    this.item = item;
  }

  execute() {
    this.shoppingCart.removeItem(this.item);
  }
}

// Receiver sınıfı
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log("Added item: " + item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log("Removed item: " + item);
    }
  }
}

// Invoker sınıfı
class User {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach((command) => {
      command.execute();
    });
  }
}

// Kullanım örneği
const shoppingCart = new ShoppingCart();
const addItemCommand = new AddItemCommand(shoppingCart, "Shirt");
const removeItemCommand = new RemoveItemCommand(shoppingCart, "Shirt");

const user = new User();
user.addCommand(addItemCommand);
user.addCommand(removeItemCommand);

user.executeCommands();
// Added item: Shirt
// Removed item: Shirt