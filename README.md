# Factory Pattern
![factory pattern](https://www.tutorialspoint.com/design_pattern/images/factory_pattern_uml_diagram.jpg)

**Ne Zaman:**
* İstemciden nesne oluşturmalarını ayrıştırmak istersek
* Bir class'ın alt classları varsa ve busunufları koşullara göre oluşturuyorsa
* Bu sınıfları belli koşullara gore oluşturan ve geri bildiren sınıfa factory denir.

**Faydaları:**
* Yeni bir alt sınıf ekledigimizde sadece alt sınıfı factorye eklemek yeterlidir.
* Resimde görüldüğü gibi sol kısımdaki nesneleri oluşturmakla gorevlı bır sınıf tanımlanmış bu sınıfa factory denir.
* Birden fazla sınıfın kontrolu tek noktadan gerçekleşir

**Dezavantajları**
* Çok fazla soyutlama kodun okunabilirliğini zorlaştırır.

# Abstract Factory Pattern
![Abstract Factory Pattern](https://www.tutorialspoint.com/design_pattern/images/abstractfactory_pattern_uml_diagram.jpg)

**Ne Zaman:**
* Farklı platformlara taşınabilir olabilmesi için
* Oluşturulan fabirkanın ve o fabrikanın oluşturacağı nesneyi seçecegimizde
* Platform değişikliği en az değişiklikle yapılır.
* Resimde gorulduğu gibi abstract factoryden türetilen factory sınıfları 2 tane arayüzün sınıflarını koşullara gore oluşturmaktadır. Bu factory sınıfları abstact factoryde birleştirilierek factory producer ile istemciden ayrıştırılmış ve tek bir noktada kontrolü sağlanmaktadır.
* Yeni factıry ve arayüz eklenmek istediğimizde sadece abstact factoryde ve koşul ne ise producerda değişiklik yapılması yetecektir.

**Faydaları:**
* Arayüz üzerinden bağlandığı için yeni alt sınıf ekleme kolaydır
* Abstract factory tüm ürünlere erişebilir.
* Yeni ürün kolayca desteklenir

**Dezavantajları**
* Çok fazla soyutlama kodun karmaşıklığını arttırır.
* Bir fabrikada değişiklik olursa arabirlimin tüm fabrikalar için değiştirilmesi gerekir.
