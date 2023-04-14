
function setup() {
    createCanvas(800,680);
     
  }
  
  
  function draw() {
    background(10,200,300);
    
    //ground 
    
    noStroke( );
    fill(0,200,40)
    rectMode(CENTER)
    rect(400,600,800,200)
    
    //sun
    ellipseMode(CENTER)
    fill(500,200,0)
    
    ellipse(240,200,100,100)
    
    
    
    //body
    noStroke()
     
    ellipseMode(CENTER)
    fill(100,50,0)
    ellipse(400,520, 90, 90)
    ellipse(440,480, 30, 30)
     ellipse(360,480, 30, 30)
    ellipse(460,570,150,90)
    ellipse (420,610,20,20)
      ellipse (490,612,20,20)
  ellipse(540,570,20,20)
    
    //eyes
    
    fill(00,0,00)
    ellipse(380,510, 20, 20)
    ellipse(420,510, 20, 20)
      ellipse(400,525, 15, 15)
  
  
    
    noStroke()
    
    //eye whites
    fill(900,900,900)
    
    ellipse(385,515, 5, 5)
    ellipse(425,515, 5, 5)
     ellipse(375,507, 8, 8)
    ellipse(415,507, 8, 8)
    
    
    
    //clouds
    
    ellipse(250, 250,100,100)
      ellipse(210, 250,90,80)
      ellipse(250, 290,250,100)
    
    
    
      ellipse(700, 260,90,80)
      ellipse(690, 290,130,80)
        ellipse(790, 230,200,200)   
    ellipse(690, 300,130,80)
    
    
  }
  