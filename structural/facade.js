/*
Facade Pattern, karmaşık bir alt sistemi basitleştirilmiş bir arayüzle kullanıcıya sunmayı sağlar.
*/
// Alt sistemdeki karmaşık sınıflar
class OrderVerification {
  verify(orderId) {
    console.log(`Order Verification: Verifying order ${orderId}`);
  }
}

class PaymentProcessing {
  processPayment(orderId) {
    console.log(`Payment Processing: Processing payment for order ${orderId}`);
  }
}

class Shipping {
  ship(orderId) {
    console.log(`Shipping: Shipping order ${orderId}`);
  }
}

// Facade
class OrderFacade {
  constructor() {
    this.orderVerification = new OrderVerification();
    this.paymentProcessing = new PaymentProcessing();
    this.shipping = new Shipping();
  }

  placeOrder(orderId) {
    console.log(`Order Placed: Placing order ${orderId}`);
    this.orderVerification.verify(orderId);
    this.paymentProcessing.processPayment(orderId);
    this.shipping.ship(orderId);
    console.log(
      `Order Completed: Order ${orderId} has been placed, processed, and shipped.`
    );
  }
}

// Kullanım örneği
const orderFacade = new OrderFacade();
orderFacade.placeOrder("12345");
