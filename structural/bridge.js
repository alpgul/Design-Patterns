/*
 Bridge Pattern, iki ayrı soyutlama seviyesini birbirinden ayıran ve birbirleriyle bağlantıyı sağlayan bir tasarım desenidir. Bu desen, esneklik ve genişletilebilirlik sağlar ve soyutlama ve gerçekleme ayrılarını birbirinden bağımsız olarak geliştirme imkanı sunar.
*/
// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    throw new Error("draw() method must be implemented.");
  }
}

// Concrete Abstraction
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log(
      `Drawing a circle with radius ${
        this.radius
      } and color ${this.color.fill()}`
    );
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log(
      `Drawing a rectangle with width ${this.width}, height ${
        this.height
      }, and color ${this.color.fill()}`
    );
  }
}

// Implementor
class Color {
  fill() {
    throw new Error("fill() method must be implemented.");
  }
}

// Concrete Implementor
class Red extends Color {
  fill() {
    return "red";
  }
}

class Blue extends Color {
  fill() {
    return "blue";
  }
}

// Client
const redCircle = new Circle(5, new Red());
const blueRectangle = new Rectangle(10, 8, new Blue());

redCircle.draw();
blueRectangle.draw();
