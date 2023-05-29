/*
Decorator Pattern, nesnelere dinamik olarak davranış eklemek veya değiştirmek için kullanılır. Dekoratör sınıfları, nesnenin üzerine gelerek davranışları değiştirir veya ekler, böylece nesnenin davranışını isteğe bağlı olarak genişletebiliriz.
*/
// Temel bileşen sınıfı
class Coffee {
  getDescription() {
    return 'Coffee';
  }

  cost() {
    return 5;
  }
}

// Decorator sınıfı
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  getDescription() {
    return this.coffee.getDescription();
  }

  cost() {
    return this.coffee.cost();
  }
}

// Ekstra malzeme dekoratörleri
class Milk extends CoffeeDecorator {
  getDescription() {
    return this.coffee.getDescription() + ', Milk';
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

class Vanilla extends CoffeeDecorator {
  getDescription() {
    return this.coffee.getDescription() + ', Vanilla';
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

// Kullanım örneği
const basicCoffee = new Coffee();
console.log('Basic Coffee:', basicCoffee.getDescription(), '| Cost:', basicCoffee.cost());

const coffeeWithMilk = new Milk(basicCoffee);
console.log('Coffee with Milk:', coffeeWithMilk.getDescription(), '| Cost:', coffeeWithMilk.cost());

const coffeeWithMilkAndVanilla = new Vanilla(coffeeWithMilk);
console.log('Coffee with Milk and Vanilla:', coffeeWithMilkAndVanilla.getDescription(), '| Cost:', coffeeWithMilkAndVanilla.cost());
