function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function()
    {
        return Math.PI * (this.radius * 2);
    };
};

var circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());