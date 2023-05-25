class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  draw() {
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  draw() {
    return `<polygon points="150,45 45,150 250,150" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  draw() {
    return `<rect x="75" y="45" width="150" height="130" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };

  