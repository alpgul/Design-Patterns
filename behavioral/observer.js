/**
 *  Observer deseni, bir nesnenin durumu değiştiğinde bağımlı olan diğer nesnelere otomatik olarak bildirim göndermek ve güncellenmeleri sağlamak için kullanılan bir tasarım desenidir.
 */
// Gözlemleyen (Observer) sınıfı
class Logger {
  constructor() {
    this.log = function(message) {
      console.log(`[LOG]: ${message}`);
    };
  }
}

// Gözlemlenen (Subject) sınıfı
class UserManager {
  constructor() {
    this.observers = [];

    this.registerObserver = function(observer) {
      this.observers.push(observer);
    };

    this.unregisterObserver = function(observer) {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    };

    this.notifyObservers = function(message) {
      this.observers.forEach(function(observer) {
        observer.log(message);
      });
    };

    this.createUser = function(user) {
      // Kullanıcı oluşturma işlemleri

      // Loglama yapılıyor
      this.notifyObservers(`Yeni kullanıcı oluşturuldu: ${user}`);
    };
  }
}

// Örnek kullanım
const logger = new Logger();
const userManager = new UserManager();
userManager.registerObserver(logger);

userManager.createUser("John Doe");
// Çıktı: [LOG]: Yeni kullanıcı oluşturuldu: John Doe
/**
Nesneler arasında gevşek bağlantı sağlar.
Gerçek zamanlı bildirimler ve güncellemeler sağlar.
Modülerlik ve yeniden kullanılabilirlik sunar.
Olay tabanlı programlamayı destekler.
Merkezi bir kontrol noktası sağlar.
Genişletilebilirlik sağlar.
Test edilebilirlik kolaylığı sağlar.
 */