/**
 * Visitor Pattern, bir nesne yapısında yer alan elemanlar üzerinde farklı operasyonlar gerçekleştirmek için kullanılan bir tasarım desenidir.
 */
// Element sınıfı
class Element {
  accept(visitor) {
    throw new Error("accept method must be implemented");
  }
}

// ConcreteElement sınıfı
class ConcreteElementA extends Element {
  accept(visitor) {
    visitor.visitConcreteElementA(this);
  }

  operationA() {
    console.log("ConcreteElementA: operationA is being executed.");
  }
}

class ConcreteElementB extends Element {
  accept(visitor) {
    visitor.visitConcreteElementB(this);
  }

  operationB() {
    console.log("ConcreteElementB: operationB is being executed.");
  }
}

// Visitor sınıfı
class Visitor {
  visitConcreteElementA(element) {
    throw new Error("visitConcreteElementA method must be implemented");
  }

  visitConcreteElementB(element) {
    throw new Error("visitConcreteElementB method must be implemented");
  }
}

// ConcreteVisitor sınıfı
class ConcreteVisitor extends Visitor {
  visitConcreteElementA(element) {
    console.log("ConcreteVisitor: Visiting ConcreteElementA.");
    element.operationA();
  }

  visitConcreteElementB(element) {
    console.log("ConcreteVisitor: Visiting ConcreteElementB.");
    element.operationB();
  }
}

// Kullanım
const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

const visitor = new ConcreteVisitor();

elementA.accept(visitor);
elementB.accept(visitor);
/**
 * bir nesneye ait ogeleri(metod değer ) baska bir nesne uzerinden işlemedir. bu işleme işlemi o işlenecek nesne bağlı olarak gercekleşir.
 * yani o nesneye metod tanımlanır ve visitor işlemi o metod ıcınde yurutulur visitorda o nesneye ait metod değer üzerinde işlemler yaparak gorevini gercekleştirir.
 * mesela bir nesne 100 tane yerde kullanılıp yeni olaylar yaratılacaktır. bu 100 yerde kullanmak icin o nesne icinde metod tanımlamak yerine ayrı classlar tanımlayarak bu 100 metodun nesneye bağlılığı zayıflatılır. boylece eğer bu 100 metod farklı sınıflar ıcınde kullanılmak istenirse kolaylık saglayacaktır.
 */
