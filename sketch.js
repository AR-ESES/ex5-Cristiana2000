let pies = [];
let plate;

function setup() {
  createCanvas(400, 400);
  plate = new Plate(width/2, 100);
}

function draw() {
  background(0);
  pies.push(new Pie(random(width), random(-100, -20)));

  for (let pie of pies) {
  pie.show();
  pie.update();
   if (plate.catches(pie)) {
    // console.log("😋");
    }
  }

for (let i = pies.length-1; i >= 0; i--) {
  if (pies[i].y > height) {
    // eat the pie?
    pies.splice(i, 1);
}
  }
console.log(pies.length);

   plate.x= mouseX;
  plate.show();
  
  
  
  rectMode(CENTER);
  rect(mouseX,height-10,100,10);
}