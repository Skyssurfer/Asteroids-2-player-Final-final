function Laser2(spos, angle) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);

  this.update = function() {
    this.pos.add(this.vel);
  }
  
  this.render = function() {
    push();
    stroke(255, 50, 50);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }

  //this.hits = function(asteroid) {
   // var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
   // if (d < asteroid.r) {
   //   return true;
   // } else {
   //   return false;
   // }
 // }
  
   this.hits = function(asteroid2) {
    var d = dist(this.pos.x, this.pos.y, asteroid2.pos.x, asteroid2.pos.y);
    if (d < asteroid2.r) {
      return true;
    } else {
      return false;
    }
  }
  
   

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }


}