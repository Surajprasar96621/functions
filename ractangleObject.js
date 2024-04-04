function Rectangle(length, width) {
    this.length = length;
    this.width = width;
  
    this.area = function() {
      return this.length * this.width;
    }
  
    this.perimeter = function() {
      return 2 * (this.length + this.width);
    }
  }
  
  const rectangle = new Rectangle(5, 3);
  console.log("Area:", rectangle.area());  
  console.log("Perimeter:", rectangle.perimeter());  
  