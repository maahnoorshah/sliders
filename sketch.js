var rSlider, gSlider, bSlider;

function setup() {
  createCanvas(710, 400);
	
  textSize(15)
  noStroke();


  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  rSlider.size(100,10);
  
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  gSlider.size(100,10);
  
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  bSlider.size(100,10);
}

function draw() {
  background (146, 244, 66);
  fill(0,0,0)
	var rNumber = rSlider.value();
	var gNumber = gSlider.value();
	var bNumber = bSlider.value();

  text(["r = "+rNumber],125,30);
  text(["g = "+gNumber],125,60);
  text(["b = "+bNumber],125,90);
  

	
  fill(rSlider.value(),gSlider.value(),bSlider.value())  
  
  noStroke();
  ellipse(width/2,height/2,200,200);

  
}
