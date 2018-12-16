


function setup() {
    createCanvas(400, 600);
    bird = new Bird();
}

function draw() {
    background(0);
    bird.show();
    bird.showBezel();

}

function keyPressed(event) {
    // console.log(event.keyCode);
    if (keyCode == 37) {
        bird.moveLeft();
    }
    if (keyCode == 38) {
        bird.moveUp();
    }
    if (keyCode == 39) {
        bird.moveRight();
    }
    if (keyCode == 40) {
        bird.moveDown();
    }

    /**
     * Figure out how to do a hold, or maybe change game idea
     * > 37
     * < 39
     * ^ 38
     * v 40
     */
}