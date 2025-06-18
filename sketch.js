let startX = 100;
let startY = 200;
let endX = 400;
let endY = 200;
let t = 0;
let plantas = [];

function setup() {
  createCanvas(500, 400);

  fill(0, 100, 0);
  ellipse(startX, startY, 20, 20);

  fill(100, 50, 0);
  rect(113, 300, 20, 100);

  fill(50, 150, 50);
  ellipse(120, 300, 70, 70);

  fill(100, 50, 0);
  rect(25, 300, 20, 100);

  fill(50, 150, 50);
  ellipse(35, 300, 70, 70);

  fill(0, 0, 255);
  ellipse(endX, endY, 20, 20);
  fill("#808080");
  rect(390, 250, 55, 100);
  fill("#B0C4DE");
  rect(420, 300, 55, 100);
  fill("#4682B4");
  rect(360, 330, 55, 100);
}

function draw() {
  t += 0.01;
  if (t > 1) t = 0;

  let x = lerp(startX, endX, t);
  let y = lerp(startY, endY, t);
  fill(255, 0, 0);
  ellipse(x, y, 15, 15);
}
