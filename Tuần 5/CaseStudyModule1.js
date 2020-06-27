
// let Circle = function (x,y,radius) {
//      this.x = x;
//      this.y = y;
//      this.radius = radius;
//      this.speedX = 5;
//      this.speedY = 5;
//
//      this.speed = function () {
//          this.x += this.speedX;
//          this.y += this.speedY;
//          this.left = this.x - this.radius;
//          this.right = this.x + this.radius;
//          this.top = this.y + this.radius;
//          this.bottom = this.y - this.radius;
//      };
//
//      this.checkLimit = function () {
//          if (this.left < 0 || this.right > document.getElementById("myCanvas").width) {
//              this.speedX = -this.speedX
//          }
//          if (this.top < 0 || this.bottom > document.getElementById("myCanvas").height) {
//              this.speedY = -this.speedY
//          }
//      }
//  }
//     function getRandomHex() {
//         return Math.floor(Math.random()*255)
//     }
//     function getRandomColor() {
//         let red = getRandomHex();
//         let green = getRandomHex();
//         let blue = getRandomHex();
//         return "rgb(" +red + "," + blue + "," + green + ")";
//     }
//  function createCircle() {
//      // let radius = Math.floor(Math.random()*80);
//      let color = getRandomColor();
//      // let x = Math.random() *window.innerWidth;
//      // let y = Math.random() *window.innerHeight;
//      let circle = new Circle(x,y,radius);
//      ctx.beginPath();
//      ctx.arc(circle.x, circle.y,circle.radius,0,2*Math.PI);
//      ctx.fillStyle = color;
//      ctx.fill();
//      setInterval(function () {
//          ctx.clearRect(0,0,document.getElementById("myCanvas").width,document.getElementById("myCanvas").height)
//          circle.speed();
//          circle.checkLimit();
//          ctx.beginPath();
//          ctx.arc(circle.x, circle.y,circle.radius,0,2*Math.PI);
//          ctx.fillStyle = color;
//          ctx.fill();},30);
//  }
// createCircle()

let Bar = function (left,top,width,height,color) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 10;
    this.moveLeft = function () {
        this.left -= this.speedX;
        this.drawBar()
    }
    this.moveRight = function () {
        this.left += this.speedX;
        this.drawBar()
    }
    this.drawBar = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }
}
function moveSelection(evt){
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
}
function leftArrowPressed() {
    bar.moveLeft()
}
function rightArrowPressed() {
    bar.moveRight()
}
// let Brick = function () {
//     this.width = width;
//     this.height = height;
//
//     this.drawBrick = function (){
//
//     }
// }
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let bar = new Bar (600,500,100,25,"blue");
bar.drawBar();
console.log(bar.x);