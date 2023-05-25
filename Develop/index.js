const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Lib/shapes.js');

const SHAPE_CHOICES = ['circle', 'triangle', 'square'];
const COLOR_CHOICES = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:'
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Choose a color for the text:',
      choices: COLOR_CHOICES
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: SHAPE_CHOICES
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Choose a color for the shape:',
      choices: COLOR_CHOICES
    }
  ])
  .then((answers) => {
    let shape;

    switch (answers.shape) {
      case 'circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.shapeColor);
        break;
    }

    const text = answers.text.toUpperCase();
    const textColor = answers.textColor;
    const svg = `<svg width="300" height="200">
      ${shape.draw()}
      <text x="50%" y="60%" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  })
  .catch((error) => console.error(error));
