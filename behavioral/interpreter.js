/*
Interpreter deseni, bir dilin gramatik kurallarını yorumlamak ve ifadeleri işlemek için kullanılan bir tasarım desenidir. Bu desen, bir dilin sözdizimini analiz etmek ve ifadeleri yorumlamak için bir yapı sağlar.
*/
// AbstractExpression
class Expression {
  interpret(context) {
    throw new Error("Abstract method");
  }
}

// TerminalExpression
class NumberExpression extends Expression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    return this.number;
  }
}

// NonterminalExpression
class AdditionExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return this.expression1.interpret(context) + this.expression2.interpret(context);
  }
}

// NonterminalExpression
class MultiplicationExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return this.expression1.interpret(context) * this.expression2.interpret(context);
  }
}

// Context
class Context {
  constructor() {
    this.variables = {};
  }

  getVariable(name) {
    return this.variables[name];
  }

  setVariable(name, value) {
    this.variables[name] = value;
  }
}

// Kullanım örneği
const context = new Context();
context.setVariable("x", 2);
context.setVariable("y", 3);
context.setVariable("z", 4);

const expression = new AdditionExpression(
  new NumberExpression(context.getVariable("x")),
  new MultiplicationExpression(
    new NumberExpression(context.getVariable("y")),
    new NumberExpression(context.getVariable("z"))
  )
);

const result = expression.interpret(context);
console.log(result); // 14