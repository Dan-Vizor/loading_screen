const CanvasSize = 600
function setup() {
  createCanvas(CanvasSize, CanvasSize)
}

var time = 0;
var x = CanvasSize/2;
var y = CanvasSize/2;
function draw() {
    background('#FFFFFF');
    fill(color(100,100,255));
    y = CanvasSize/5 * Math.sin(time / 20)
    ellipse(x, y + CanvasSize/3, 50 * Math.sin(time / 20), 50);
    time += 1;
}