//$("#boom_display").onclic;

function fire(x1,y1){
    var b = $('<div>'); 
    var xd = x1-5;
    var yd = y1-5;
    let x0 = window.innerWidth/2;
    let y0 = window.innerHeight/2;
    var lenght = Math.sqrt((x0-xd)*(x0-xd)+(y0-yd)*(y0-yd));
    b.addClass('rocket').appendTo('#boom_display');
    b.css('left', '50.8%');
    b.css('top', '50.8%');
    b.animate({left: x, top: y}, 0.3*lenght, 'linear')
       .promise()
       .done(function(){
            boomboom(x,y);
            b.css('background-color','gray').promise().done(function(){setTimeout(function(){b.remove()},1000)});
    });
    
    armor=armor-1;
    $('#armor').text(armor);
    if(armor<1){clearTimeout(fire_id);};
}
//setInterval(fire, 300);

function boomboom(x,y){
    var c = $('<div>');
    c.addClass('boom');
    c.css('left', x);
    c.css('top', y);
    c.appendTo('#boom_display'); 
    c.animate({opacity: 0, height: 300, width: 300, left: "-=150", top: "-=150"}, 400,'linear').promise().done(function(){c.remove()});
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var red = 0; //red = getRandomInt(255);
var green = 0;//green = getRandomInt(255);
var blue = 0;//blue = getRandomInt(255);
var armor = 100;
let i=0;
var x=0,y=0;
let fire_id


$('#boom_display').mousedown(function (){
    console.log(event);
    x=event.offsetX;
    y=event.offsetY;
    if(armor>0){
      fire(x,y);
      fire_id = setInterval(function(){fire(x,y)},80);
    }
});
$('#boom_display').mouseup(function (){
    console.log(event);
  
    clearTimeout(fire_id);
});

$('#boom_display').mousemove(function(){
    var h = $('#hero');
    x = event.offsetX;
    y = event.offsetY;
    let x0 = window.innerWidth/2;
    let y0 = window.innerHeight/2;
    let deg = 180 / Math.PI * Math.atan2(y-y0, x-x0);
    h.css("transform", "rotate(" + deg + "deg)");
    h.css("-moz-transform", "rotate(" + deg + "deg)");
    h.css("-webkit-transform", "rotate(" + deg + "deg)");
    h.css("-o-transform", "rotate(" + deg + "deg)");
    //setInterval(fire,2200);
});
