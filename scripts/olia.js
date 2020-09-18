class Shape {
  constructor(color) {
    this._color = color;
  }

  getArea() {
    return 0;
  }

  setColor(newColor) { // "test" == "string"
    if (typeof newColor === "string") {
      this._color = newColor;
    }
  }

  getColor() {
    return this._color;
  }
}


class Triangle extends Shape {
  constructor(color, base, height){
    super(color);
    this._base = base;
    this._height = height;
  }
  
  getArea() {
    return 1/2 * this._base * this._height;
  }

  setHeight(newHeight) {
    if (typeof newHeight === "number"){
      this._height = newHeight;
    }
  }

  getHeight() {
    return this._height;
  }
  
  setBase(newBase) {
    if (typeof newBase === "number"){
      this._base = newBase;
    }
  }

  getBase() {
    return this._base;
  }
}

class Square extends Shape {
  constructor (color, sideLength) {
    super(color);
    this._numberOfSides = 4;
    this._sideLength = sideLength;
  }

  getArea() {
    return this._sideLength * this._numberOfSides;
  }
}

const sqr = new Square("yellow", 8);

const trg = new Triangle("green", 4, 8); 


function drawShapes(shapes) {
  for (const figure of shapes) {
    if (figure instanceof Shape) {
      console.log(figure.getArea());
    }
  }
}

drawShapes([sqr, trg])