var flock;

var sliderSep;
var sliderAli;
var sliderCoh;


function setup() {
    var canvas = createCanvas(640, 360);
    canvas.position(20, 100)

    button = createButton('reset');
    button.position(width - 40, 10);
    button.mousePressed(reset);

    sliderSep = createSlider(0, 5, 1, 0.01);
    sliderSep.position(20, 10);
    sliderAli = createSlider(0, 5, 1, 0.01);
    sliderAli.position(20, 35);
    sliderCoh = createSlider(0, 5, 1, 0.01);
    sliderCoh.position(20, 60);

    flock = new Flock();
    // Add an initial set of boids into the system
    for (var i = 0; i < 100; i++) {
        var b = new Boid(random(width), random(height));
        flock.addBoid(b);
    }
}

function draw() {
    background(51);
    flock.run();
}

// Add a new boid into the System
function mouseDragged() {
    flock.addBoid(new Boid(mouseX, mouseY));
}

function reset() {
    flock = new Flock();
    for (var i = 0; i < 100; i++) {
        var b = new Boid(random(width), random(height));
        flock.addBoid(b);
    }
}
