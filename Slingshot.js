class Slingshot{

  constructor(bodyA, pointB){

    var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10
    }

  this.pointB = pointB
  this.sling = Constraint.create(options);

  World.add(world, this.sling);
  }

  display(){

    if(this.sling.bodyA!= null){

      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();
      fill("blue");
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      pop();
    }

  }

 fly(){
   this.sling.bodyA = null;
 }

  attach(body) {
   this.sling.bodyA = body;
  }
    
}