/**
 * Composite Pattern, tek bir nesnenin ve içindeki bileşenlerin ağaç benzeri bir yapıda birleştirilmesini sağlar, böylece tüm nesneleri tek bir arayüz altında ele alabiliriz.
 */

class Equipment {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class CompositeEquipment extends Equipment {
  constructor(name, price) {
    super(name, price);
    this.equipmentList = [];
  }

  add(equipment) {
    this.equipmentList.push(equipment);
  }

  remove(equipment) {
    const index = this.equipmentList.indexOf(equipment);
    if (index !== -1) {
      this.equipmentList.splice(index, 1);
    }
  }

  getPrice() {
    let totalPrice = this.price;
    for (const equipment of this.equipmentList) {
      totalPrice += equipment.getPrice();
    }
    return totalPrice;
  }
}

// Kullanım örneği
const keyboard = new Equipment("Keyboard", 50);
const mouse = new Equipment("Mouse", 30);
const monitor = new Equipment("Monitor", 200);
const cpu = new Equipment("CPU", 300);

const computer = new CompositeEquipment("Computer", 0);
computer.add(keyboard);
computer.add(mouse);
computer.add(monitor);
computer.add(cpu);

const speaker = new Equipment("Speaker", 100);
const printer = new Equipment("Printer", 150);

const peripherals = new CompositeEquipment("Peripherals", 0);
peripherals.add(speaker);
peripherals.add(printer);

const totalCost = new CompositeEquipment("Total Cost", 0);
totalCost.add(computer);
totalCost.add(peripherals);

console.log(`Total Cost: $${totalCost.getPrice()}`);
