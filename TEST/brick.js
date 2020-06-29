
let Brick = function (x,y,width,height,color) {
    let _thisRef = this;
    this.left = x;
    this.top  = y;
    this.getX = function () {
        return this.left
    }
    this.getY = function () {
        return this.top
    }

    this.width = width;
    this.height = height;
    this.color = color;
    this.setBall =function (object) {
        this.ball = object
    }
    this.drawBrick = function (){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }

    this.disappear = function () {
        ctx.clearRect(this.left, this.top, this.width, this.height);
    }
    this.setStatus = function () {
        this.status = 0;
    }

    this.isTouched = function () {
        if ((((this.ball.x >= _thisRef.getX())
                && (this.ball.x <= _thisRef.getX() + this.width))
                    && ((this.ball.bottom == this.top)
                     || (this.ball.top == (this.top + this.height))))
            ||
            (((this.ball.y >= _thisRef.getY())
                && (this.ball.y <= _thisRef.getY() + this.height))
                  && ((this.ball.right == this.left)
                    || (this.ball.left == (this.left + this.width))))
        )
        {
            return true;
        }return false;
    }
    this.breakBrick = function () {
        if (this.isTouched()) {
            this.setStatus();
            this.disappear();
        }
    }
}
