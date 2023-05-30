/**
 * Mediator deseni, nesneler arasındaki iletişimi ve etkileşimi düzenlemek için aracı bir nesne kullanarak yapılandırılan bir tasarım desenidir.
 */
// Mediator (Aracı) sınıfı
class ProductionLineMediator {
  constructor() {
    this.assemblyRobot = null;
    this.paintingRobot = null;
    this.testingRobot = null;
  }

  setAssemblyRobot(robot) {
    this.assemblyRobot = robot;
  }

  setPaintingRobot(robot) {
    this.paintingRobot = robot;
  }

  setTestingRobot(robot) {
    this.testingRobot = robot;
  }

  assembleCar() {
    const carParts = this.assemblyRobot.assembleParts();
    this.paintingRobot.paintCar(carParts);
    this.testingRobot.testCar(carParts);
  }
}

// Colleague (İş Arkadaşı) sınıfları
class AssemblyRobot {
  assembleParts() {
    console.log("Assembly Robot: Parts assembled.");
    return "assembledParts";
  }
}

class PaintingRobot {
  paintCar(parts) {
    console.log(`Painting Robot: Painting ${parts} with color red.`);
  }
}

class TestingRobot {
  testCar(parts) {
    console.log(`Testing Robot: Testing ${parts} for quality assurance.`);
  }
}

// Kullanıcıları ve Mediator'ü oluşturma
const mediator = new ProductionLineMediator();

const assemblyRobot = new AssemblyRobot();
const paintingRobot = new PaintingRobot();
const testingRobot = new TestingRobot();

mediator.setAssemblyRobot(assemblyRobot);
mediator.setPaintingRobot(paintingRobot);
mediator.setTestingRobot(testingRobot);

// Otomobil üretimi
mediator.assembleCar();
//tek bir noktan nesneler arası iletişimde tek bir yerden kontrolunu sağlar ayrıca eğer bir metod veya nesne birden fazla nesneye iletilmesi bakımında mediator kod kalabalığını ve tek bir kontrol noktası olması yonunde fayda saglar