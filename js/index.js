


//canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//dimensiones
canvas.width  = 1280
canvas.height = 768   

//dimensiones de rectangulo cancas
c.fillStyle = 'white'
c.fillRect(0,0,canvas.width, canvas.height)


//construir edificios
const placementTilesData2D = []
for (let i = 0 ; i < placementTilesData.length; i += 20)
{
   placementTilesData2D.push(placementTilesData.slice(i, i + 20))
}

const placementTiles = []
placementTilesData2D.forEach((row, y) =>{
 row.forEach((symbol,x) =>{
   if(symbol == 14){
      placementTiles.push(
       new PlacementTile({
         position: {
           x: x * 64,
           y: y * 64
         }
       })
      )
   }
 })
})

console.log(placementTiles)
//----------- cargar imagen ----------- 
const image = new Image() 
image.onload = () => {
 animate();
 placementTiles
}
image.src = 'img/TowerDefense.png'
//-------------------------------------



const enemies = []
for (let i = 1; i < 10 ; i++)
{
 const xoffset = i * 150
 enemies.push(
     new Enemy({
        position: {x: waypoints[0].x - xoffset, y:  waypoints[0].y }
     })
 )
}

const buildings = []
let activeTile = undefined

function animate(){
window.requestAnimationFrame(animate)
 c.drawImage(image,0, 0)  

 enemies.forEach(enemy => {
     enemy.update()
 })

 placementTiles.forEach(tile =>{
   tile.update(mouse)
 })

 buildings.forEach(building=>{
    building.draw()
 })
}

const mouse = {
   x: undefined,
   y: undefined,
}

canvas.addEventListener('click', (event) =>{
    if(activeTile && !activeTile.isOccupied){
        buildings.push(
            new Building({
                position:{
                     x: activeTile.position.x,
                     y: activeTile.position.y
                }
            })
        )
        activeTile.isOccupied = true
    }
})

window.addEventListener('mousemove',(event)=>{
    mouse.x = event.clientX
    mouse.y = event.clientY

    activeTile = null
    for (let i = 0; i < placementTiles.length; i++){
        const tile = placementTiles[i]

        if(mouse.x > tile.position.x &&
            mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + tile.size){
                activeTile = tile
                break
        }        
    }
})



//********************** 1 demo ****************************************************
  /*
   //canvas
   const canvas = document.querySelector('canvas')
   const c = canvas.getContext('2d')

   //dimensiones
   canvas.width  = 1280
   canvas.height = 768   

   //dimensiones de rectangulo
   c.fillStyle = 'white'
   c.fillRect(0,0,canvas.width, canvas.height)


   //----------- cargar imagen ----------- 
   const image = new Image() 
   image.onload = () => {
    //-----Dibujar img-------
    //c.drawImage(image,0, 0)
    //c.fillStyle = 'red'
    //c.fillRect(200, 400,100,100)

    //ejecutar animacion con mapa
    animate();
   }
   image.src = 'img/TowerDefense.png'
   //-------------------------------------

class Enemy{constructor( {position = {x: 0, y : 0}}
    ){  
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
       // this.position.x += 1 
        debugger
        //const waypoint = waypoints[0]
        const waypoint = waypoints[this.waypointIndex]

      
       debugger
       //var yDistance = waypoint.y - this.position.y
       //var xDistance = waypoint.x - this.position.x

        var yDistance = waypoint.y - this.Positioncenter.y
        var xDistance = waypoint.x - this.Positioncenter.x

        const angle = Math.atan2(yDistance,xDistance)
        this.position.x += Math.cos(angle)
        this.position.y += Math.sin(angle)
       
        this.Positioncenter = {
            x: this.position.x + this.width/2,
            y: this.position.y + this.width/2
        }

        //if( Math.round(this.center.x) === Math.round(waypoint.x) && 
        //Math.round(this.center.y) === Math.round(waypoint.y) &&

       if( Math.round(this.Positioncenter.x) === Math.round(waypoint.x) && 
		   Math.round(this.Positioncenter.y) === Math.round(waypoint.y) &&
		   this.waypointIndex < waypoints.length - 1)
		   {
			   
			   this.waypointIndex++
		   }
        console.log('waypointIndex: ' + this.waypointIndex)
    }
}

//----------ejemplo1--------
    //let x= 200
    //function animate(){
    //window.requestAnimationFrame(animate)
    //c.drawImage(image,0, 0)
    //c.fillStyle = 'red'
   // c.fillRect(x, 400,100,100)
   // x++
   //console.log('go')
   //}
   //animate();

//----------ejemplo2--------
//const enemy = new Enemy() //sin parametro


//ejemplos 1
//const enemy1 = new Enemy({position : { x : 400, y: 600}})
//const enemy2 = new Enemy({position : { x : 150, y: 400}})

//ejemplos 2
//const enemy1 = new Enemy({position : { x :  waypoints[0].x, y:  waypoints[0].y }})
//const enemy2 = new Enemy({position : { x :  waypoints[0].x - 150, y:  waypoints[0].y }})

//ejemplos 3

const enemies = []
for (let i = 1; i < 10 ; i++)
{
    const xoffset = i * 150
    enemies.push(
        new Enemy({
                     position: {x: waypoints[0].x - xoffset, y:  waypoints[0].y }
        })
    )
}


   function animate(){
   window.requestAnimationFrame(animate)
    //llamar mapa
    c.drawImage(image,0, 0)  
    //enemy1.update()
    //enemy2.update()
    enemies.forEach(enemy => {
        enemy.update()
    })
    console.log('go')
   }
*/
 

   //*************** Pruebas *****************
   /*const image = new Image() 
   image.src = 'img/gameMap.png'

   var x = 50
   var y = 100

   image.onload = () => {   

   setInterval(() => {
     c.drawImage(image,0, 0)  
     c.fillStyle = 'blue'
     c.fillRect(x,y,100,100)      
   
      rebote()
     }, 10) 
   } 

var aumx = 1
var aumy = 1

function rebote() {

    if(x  <= 0)  {
        aumx = +1;  
    }
    if(y <= 0 ) {
        aumy = +1;
    }

    if(x  > 300)  {
        aumx = -1;
    }
    if(y > 300 ) {
        aumy = -1;
    }    
    x += aumx;
    y += aumy;

    console.log(aumx,aumy)
}
   */


  
   
   
  