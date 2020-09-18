class Shape {
  constructor(color) {
    this._color = color;
  }

  getArea() {
    return 0;
  }
  
  setColor(newColor) {
    if (typeof newColor === 'string') {
      this._color = newColor;
    }
  }

  getColor() {
    return this._color;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this._base = base;
    this._height = height;
  }

  getArea() {
    return (this._height * this._base) / 2;
  }
  
  setHeight(newHeight) {
    if (typeof newHeight === 'number') {
      this._height = newHeight; 
    }
  }

  setBase(newBase) {
    if (typeof newBase === 'number') {
      this._base = newBase;
    }
  }
}
  
const trg = new Triangle('blue', 20, 40);
// {_color: 'red', getArea: function(){}, setColor: function(){}, getColor: function(){}}


// console.log(trg);
// console.log(trg.getColor());

trg.setColor('grey');

// console.log(trg.getColor());

// console.log(trg.getArea());


console.log(trg._height);

trg.setHeight(50);

console.log(trg._height);

console.log('----------------------------------------------');



trg.setBase(60);
console.log(trg._base);