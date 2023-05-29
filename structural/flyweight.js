/*
Flyweight Pattern, çok sayıda benzer nesnenin bellek kullanımını azaltmak için paylaşılan durumları ortaklaştıran bir tasarım desenidir. Bu desen, veri tekrarını en aza indirerek bellek ve performans açısından optimize edilmiş bir yapı sunar.
*/
// Flyweight arayüzü
class Character {
  constructor(character) {
    this.character = character;
  }

  draw(positionX, positionY) {
    console.log(
      `Drawing character ${this.character} at position (${positionX}, ${positionY})`
    );
  }
}

// Flyweight Factory
class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(character) {
    if (!this.characters[character]) {
      this.characters[character] = new Character(character);
    }
    return this.characters[character];
  }
}

// Kullanım örneği
const characterFactory = new CharacterFactory();

const characterA = characterFactory.getCharacter("A");
characterA.draw(10, 20);

const characterB = characterFactory.getCharacter("B");
characterB.draw(30, 40);

const characterA2 = characterFactory.getCharacter("A");//nesne tekrar olusturulmuyor hem nesne olusturma zamanından hemde bellek kullanım acısından yarar saglanıyor.
characterA2.draw(50, 60);
console.log(characterA=== characterA2);
