class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    render(drawCircle){
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(10,10,100,0,2*Math.PI);
        ctx.stroke();

    }
}
let Circle1 = new Circle(10,10,100,0,);
Circle1.render();