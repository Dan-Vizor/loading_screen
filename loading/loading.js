const CanvasSize = 600
function setup() {
  createCanvas(CanvasSize, CanvasSize)
}

var time = 0;
var x = CanvasSize/2;
var y = 0;
function draw() {
    background('#FFFFFF');
    fill(color(100,100,255));
    y = 150 * Math.sin(time / 20)
    ellipse(x, y + 250, 50 * Math.sin(time / 20), 50);
    time += 1;
}