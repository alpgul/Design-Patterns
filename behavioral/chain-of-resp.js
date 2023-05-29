/*
Chain of Responsibility deseni, bir isteği işlemek için nesneleri zincirleme şeklinde bağlayan bir tasarım desenidir. İstek zinciri boyunca ilerlenir ve her bir nesne isteği işleyebilirse işler, aksi takdirde bir sonraki nesneye aktarır. Bu desen, işlem adımlarını veya filtreleme işlemlerini sıralı bir şekilde uygulamak için kullanılır.
*/
// Handler (İşleyici) arayüzü
class ErrorHandler {
  setNext(handler) {
    throw new Error("Metodun uygulanması gerekiyor");
  }

  handle(request) {
    throw new Error("Metodun uygulanması gerekiyor");
  }
}

// ConcreteHandler (Somut İşleyici) sınıfları
class FileErrorHandler extends ErrorHandler {
  setNext(handler) {
    this.nextHandler = handler;
  }

  handle(request) {
    if (request.errorType === "file") {
      console.log("Dosya hatası işlendi.");
    } else if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log("Hata işlenemedi.");
    }
  }
}

class NetworkErrorHandler extends ErrorHandler {
  setNext(handler) {
    this.nextHandler = handler;
  }

  handle(request) {
    if (request.errorType === "network") {
      console.log("Ağ hatası işlendi.");
    } else if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log("Hata işlenemedi.");
    }
  }
}

class UnknownErrorHandler extends ErrorHandler {
  setNext(handler) {
    this.nextHandler = handler;
  }

  handle(request) {
    console.log("Bilinmeyen hata işlendi.");
  }
}

// Kullanım örneği
const fileErrorHandler = new FileErrorHandler();
const networkErrorHandler = new NetworkErrorHandler();
const unknownErrorHandler = new UnknownErrorHandler();

fileErrorHandler.setNext(networkErrorHandler);
networkErrorHandler.setNext(unknownErrorHandler);

const errorRequest1 = { errorType: "file" };
const errorRequest2 = { errorType: "network" };
const errorRequest3 = { errorType: "database" };

fileErrorHandler.handle(errorRequest1); // Dosya hatası işlendi.
fileErrorHandler.handle(errorRequest2); // Ağ hatası işlendi.
fileErrorHandler.handle(errorRequest3); // Bilinmeyen hata işlendi.