class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  subtract(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }
  dot(other) {
    return this.x * other.x + this.y * other.y;
  }
  toString() {
    return `Vector(${this.x}, ${this.y})`;
  }
}
const v1 = new Vector(3, 4);
const v2 = new Vector(1, 2);

console.log(v1.add(v2).toString());      
console.log(v1.subtract(v2).toString());  
console.log(v1.dot(v2));                   
