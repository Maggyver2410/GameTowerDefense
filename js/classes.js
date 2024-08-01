
class PlacementTile{
    constructor({position = {x: 0, y : 0}}){    
        this.position = position
        this.size = 64
        this.color = 'rgba(255,255,255,0.15)'
        this.occupied = false
    }
    draw(){
        c.fillStyle =  this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size)
    }
    update(mouse){
        this.draw()   

        if(
         mouse.x >  this.position.x &&
         mouse.x < this.position.x + this.size &&
         mouse.y > this.position.y &&
         mouse.y < this.position.y + this.size)
         {  
           this.color = 'white'
         }else {
            this.color =  'rgba(255,255,255,0.15)'
         }
    }
 }
 
class Enemy{
    constructor( {position = {x: 0, y : 0}}){ 
     this.position = position
     this.width = 100
     this.height = 100
     this.waypointIndex = 0
     //centrar iconos
    this.Positioncenter = {
         x: this.position.x + this.width/2,
         y: this.position.y + this.width/2
     }
    }

 draw(){
     c.fillStyle = 'red'
     c.fillRect(this.position.x, this.position.y , this.width, this.height)
 }

 update(){
     this.draw()       
     const waypoint = waypoints[this.waypointIndex]    
     var yDistance = waypoint.y - this.Positioncenter.y
     var xDistance = waypoint.x - this.Positioncenter.x
     const angle = Math.atan2(yDistance,xDistance)
     this.position.x += Math.cos(angle)
     this.position.y += Math.sin(angle)     
     this.Positioncenter = {
         x: this.position.x + this.width/2,
         y: this.position.y + this.width/2
     }

    if( Math.round(this.Positioncenter.x) === Math.round(waypoint.x) && 
        Math.round(this.Positioncenter.y) === Math.round(waypoint.y) &&
        this.waypointIndex < waypoints.length - 1)
        {             
            this.waypointIndex++
        }  
 }
}
class Building{
    constructor({position = {x: 0, y : 0}}){    
        this.position = position
        this.width = 64 * 2
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y , this.width, 64)
    }
   
}