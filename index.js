console.log("jaden")
var xPos = 200;
var yPos = 200;
var W = 10;
var H = 10;
draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, W, H);
    W+=1; 
    H+=1;
