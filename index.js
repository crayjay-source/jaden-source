console.log("jaden")
var x = 200;
var y = 250;

fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball
fill(0, 0, 0);
ellipse(x, y, 156, 73);
rect(x - 61, y - 62, 15, 15);
rect(x + 39, y - 60, 15, 15);
