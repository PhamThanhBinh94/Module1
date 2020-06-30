
let Ball = function (x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = 5;
    this.speedY = 5;

    this.setBar = function (object) {
        this.barLine = object;
    }

    this.setBrick = function (object) {
        this.brickLine =object;
    }

    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
    this.setBall = function (x,y) {
        this.x = x;
        this.y = y;
    }
    this.moveBall = function () {
        ctx.clearRect(this.x-this.radius-5, this.y - this.radius-5, 2*this.radius+10, 2*this.radius+10)
        this.x += this.speedX;
        this.y += this.speedY;
        this.left = this.x - this.radius;
        this.right = this.x + this.radius;
        this.top = this.y - this.radius;
        this.bottom = this.y + this.radius;
        this.drawBall();
    }

    this.checkLimit = function () {
        if (this.left < 0 || this.right > canvas.width) {
            this.speedX = -this.speedX
        }
        if (this.top < 0 ) {
            this.speedY = -this.speedY
        }
    }

    this.checkBar = function () {
        if((this.y + this.radius == this.barLine.top || this.y -this.radius == this.barLine.top +this.barLine.height)
            && this.x >= this.barLine.left
            && this.x <= this.barLine.left + this.barLine.width)
        {
            this.speedY = -this.speedY
        }
        if ((this.x + this.radius == this.barLine.left || this.x-this.radius == this.barLine.left +this.barLine.width)
            && (this.y >= this.barLine.top
                && this.y <= this.barLine.top + this.barLine.height)){
            this.speedX = -this.speedX;
            // this.speedY = -this.speedY;
        }

        if (Math.sqrt(Math.pow(this.x-this.barLine.left,2)+Math.pow(this.y-this.barLine.top,2)) <this.radius) {
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
        }
        if (Math.sqrt(Math.pow(this.x-this.barLine.left-this.barLine.width,2)+Math.pow(this.y-this.barLine.top,2)) <this.radius) {
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
        }

    }
    this.checkBrick = function () {
        if((this.y + this.radius == this.brickLine.top || this.y -this.radius == this.brickLine.top +this.brickLine.height)
            && this.x >= this.brickLine.left
            && this.x <= this.brickLine.left + this.brickLine.width)
        {
            this.speedY = -this.speedY
        }
        if ((this.x + this.radius == this.brickLine.left || this.x-this.radius == this.brickLine.left + this.brickLine.width)
            && (this.y >= this.brickLine.top
                && this.y <= this.brickLine.top + this.brickLine.height)){
            this.speedX = -this.speedX;
        }
        if (Math.sqrt(Math.pow(this.x-this.brickLine.left,2)+Math.pow(this.y-this.brickLine.top,2)) <this.radius)
        {
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
        }
        if (Math.sqrt(Math.pow(this.x-this.brickLine.left,2)+Math.pow(this.y-this.brickLine.top-this.brickLine.height,2)) <this.radius)
        {
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
        }
        if (Math.sqrt(Math.pow(this.x-this.brickLine.left-this.brickLine.width,2)+Math.pow(this.y-this.brickLine.top,2)) <this.radius)
        {
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
        }
        if (Math.sqrt(Math.pow(this.x-this.brickLine.left-this.brickLine.width,2)+Math.pow(this.y-this.brickLine.top-this.brickLine.height),2) <this.radius)
        {
            this.speedX = -this.speedX;
            // this.speedY = -this.speedY;
        }
    }
    this.checkEndGame = function () {
        if (this.top >= canvas.height) {
            return true
        }
    }
}
