var hr,se,mi
var hrangle,seangle,miangle












function setup() {
  createCanvas(400,400);
 angleMode(DEGREES)
}

function draw() {
  background("black");  
 translate(200,200)
 rotate(-90)
 hr=hour()
 mi=minute()
 se=second()
 seangle=map(se,0,60,0,360)
 miangle=map(mi,0,60,0,360)
 hrangle=map(hr%12,0,12,0,360)
 push()
 rotate(seangle)
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 pop()
 push()
 rotate(miangle)
 stroke(0,255,0)
 strokeWeight(7)
 line(0,0,75,0)
 pop()
 push()
 rotate(hrangle)
 stroke(0,0,255)
 strokeWeight(7)
 line(0,0,50,0)
 pop()
 stroke(255,0,255)
 point(0,0)
 stroke(10)
 noFill()
 stroke(255,0,0)
 arc(0,0,300,300,0,seangle)
 stroke(0,255,0)
 arc(0,0,280,280,0,miangle)
 stroke(0,0,255)
 arc(0,0,260,260,0,hrangle)
}