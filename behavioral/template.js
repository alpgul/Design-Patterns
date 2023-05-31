/**
 * Template Pattern, bir sürecin temel bir şablonunu tanımlayan ve bu sürecin bazı adımlarını alt sınıflara bırakan bir tasarım desenidir.
 */
// Template sınıfı
class Template {
  cook() {
    this.prepareIngredients();
    this.cookMeal();
    this.serveMeal();
  }

  prepareIngredients() {
    throw new Error("prepareIngredients method must be implemented");
  }

  cookMeal() {
    throw new Error("cookMeal method must be implemented");
  }

  serveMeal() {
    throw new Error("serveMeal method must be implemented");
  }
}

// ConcreteTemplate sınıfı
class ConcreteTemplate extends Template {
  prepareIngredients() {
    console.log("Ingredients are being prepared.");
  }

  cookMeal() {
    console.log("Meal is being cooked.");
  }

  serveMeal() {
    console.log("Meal is being served.");
  }
}

// Kullanım
const template = new ConcreteTemplate();
template.cook();
/**
 * Kod tekrarını azaltır: Ortak olan işlemleri bir kez tanımlar ve alt sınıflar arasında paylaşır, böylece kod tekrarını önler.
Esneklik sağlar: Şablonu kullanarak sürecin bazı adımlarını özelleştirebilir ve yeni adımlar ekleyebilirsiniz.
Davranışın merkezi kontrolü: Şablon sınıfı, sürecin akışını ve adımlarını kontrol eder. Bu sayede, sürecin bütünlüğünü koruyabilir ve merkezi bir kontrol sağlayabilirsiniz.
Uygulama kolaylığı: Alt sınıfların sadece özelleştirilmiş adımları uygulaması gerektiği için, yeni işlemler eklemek veya süreci değiştirmek daha kolay hale gelir.
İyi bir tasarım prensibi: Template Pattern, "Liskov İlkesi" ve "Açık/Kapalı İlkesi" gibi temel tasarım prensiplerine uygun bir şekilde kodun düzenli ve genişletilebilir olmasını sağlar.
 */
