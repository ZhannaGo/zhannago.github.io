//ball animation
var create = function(){
    // random x and y
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = Math.floor(Math.random()*width);
    var y = Math.floor(Math.random()*height);
    if (x>(width-50)) x = width - 50;
    if (y>(height-50)) y = height - 50;
  
    // random color
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  
    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '10px';    
    div.style.height = '10px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    
  
    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);
  
    // default start position
    div.x = x;
    div.y = y;
    return div;        
  }
  
  var size = function(div, width, height){
    div.style.width = width + 'px';    
    div.style.height = height + 'px';    
  }
  
  var color = function(div, r, g, b){
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    div.style.background = color; 
  }
  
  var zIndex = function(div, zIndex){
    div.style.zIndex = zIndex.toString(); 
  }
  
  var colorRandom = function(div){
  
    var counter = 0;
    var limit = 3;
  
    var timerColor = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;
  
        setTimeout(function(){
            // random color
            var r = Math.floor(255*(Math.random()));
            var g = Math.floor(255*(Math.random()));
            var b = Math.floor(255*(Math.random()));        
            var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            div.style.background = color; 
            timerColor(div);
        },500);
    }
    timerColor(div);
  }
  
  
  var move = function(div, x, y){
  
    // add x coordinate
    div.x = div.x + x;
    div.style.left = div.x + 'px';
  
    // add y coordinate
    div.y = div.y + y;
    div.style.top = div.y + 'px';                  
  }
  
  var repeatMove = function(div, x, y, limit){
    var counter = 0;
  
    var timerMove = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;
  
        setTimeout(function(){
            move(div,x,y);
            timerMove(div,x,y);
        },1000);
    }
    timerMove(div,x,y);
  }    
  
  
  
// you can use this
/* 
ball = create();
size(ball,100,100); // set size
color(ball,255,0,0); //set color
move(ball,50,50); //move ball
colorRandom(ball); // random color
zIndex(ball,5); // set z-index
repearMove(ball, 20, 10, 5); // move multiple time
*/


//or you can use this

var list = [];
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());



// change color of balls in array

var i=0;
var length = list.length;
while (i < length) { 
    var ball = list[i];
    colorRandom(ball);
    i++;
}
 

/*
//or you can use this code
var counter = 0;
while (counter < 10) {
    create();
    counter ++;
}
 */ 

