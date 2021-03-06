class Light {
  constructor(_xs,_ys,_d,_xp,_yp){

    this.xs = _xs;
    this.ys = _ys;
    this.d = _d;
    this.xp = _xp;
    this.yp = _yp;
    this.boundary = 50;
    this.x = mouseX;
    this.y = mouseY;
    
  }
  
  makeCircle(x,y,z) {
    let _x = x - mouseX;
    let _y = y - mouseY;
    
    if (sqrt(sq(_x) + sq(_y)) < z ) {
      return true;
    } else {
      return false;
    }
  }
  
  move(){
    let _x = this.xp - mouseX;
    let _y = this.yp - mouseY;
    let click = false;
    
    if (sqrt(sq(_x) + sq(_y)) < this.boundary ) {
      click = true;
    } else {
      click = false;
    }
    
  if (click == true) {

      if (this.xp <= mouseX) {
        this.xp -= this.boundary;
      } else if (this.xp > mouseX) {
        this.xp += this.boundary;
      }
      if (this.yp <= mouseY) {
        this.yp -= this.boundary;
      } else if (this.yp > mouseY) {
        this.yp += this.boundary;
      }
    }
  }
  
  display() {
      this.xp += this.xs/2;
      this.yp += this.ys/2;
      noStroke();
      ellipse(this.xp,this.yp,this.d*2,this.d*2);
    
      if (this.xp < 0 || this.xp > width) {
        this.xs *= -0.5;
      }
      if (this.yp < 0 || this.yp > height) {
        this.ys *= -0.5;
      }
    }
}

