function Bird() {
    this.y = height / 2;
    this.x = width / 2;
    this.velocity = 100;

//implement an up/down and left/rigght check with velocity so that the block doesnt move into the spot and get set to that positon
//itll prevent the block from getting offset

    this.showBezel = function () {
        fill(0);
        rect(0,0, width, this.velocity);
        rect(0,0, this.velocity, height);
        rect(width-this.velocity,0, this.velocity, 0);
    }

    this.show = function () {
        fill(255,0,0);
        // ellipse(this.x, this.y, 16, 16);
        rect(this.x, this.y, 16,16);
    }

    this.moveUp = function () {
        this.y -= this.velocity;
        if(this.y < this.velocity){
            this.y = this.velocity;
        }
    }

    this.moveDown = function () {
        this.y += this.velocity;
        if(this.y > height - this.velocity){
            this.y = height - this.velocity;
        }
    }

    this.moveLeft = function () {
        this.x -= this.velocity;
        if(this.x < this.velocity){
            this.x = this.velocity;
        }
    }

    this.moveRight = function () {
        this.x += this.velocity;
        if(this.x > width - this.velocity){
            this.x = width- this.velocity;
        }
    }


}