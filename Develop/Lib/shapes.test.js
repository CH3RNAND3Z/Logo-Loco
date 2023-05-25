const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
  test('draw() returns valid SVG', () => {
    const circle = new Circle('red');
    expect(circle.draw()).toBe('<circle cx="150" cy="100" r="75" fill="red" />');
  });
});

describe('Triangle', () => {
  test('draw() returns valid SVG', () => {
    const triangle = new Triangle('green');
    expect(triangle.draw()).toBe('<polygon points="150,45 45,150 250,150" fill="green" />');
  });
});

describe('Square', () => {
  test('draw() returns valid SVG', () => {
    const square = new Square('blue');
    expect(square.draw()).toBe('<rect x="75" y="45" width="150" height="130" fill="blue" />');
  });
});
