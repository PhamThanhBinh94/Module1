
let Bar = function (left,top,width,height,color) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 20;
    this.moveLeft = function () {
        if (this.left > 0){
            ctx.clearRect(this.left-1,this.top-1,this.width+2,this.height+2);
            this.left -= this.speedX;
            this.drawBar()}
    }
    this.moveRight = function () {
        if (this.left+this.width < canvas.width){
            ctx.clearRect(this.left-1,this.top-1,this.width+2,this.height+2);
            this.left += this.speedX;
            this.drawBar()}
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
function docReady(){
    window.addEventListener('keydown', moveSelection);
}