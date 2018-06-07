/**
 * Created by ty on 2016/11/10.
 */
var canvas;
var stage;
var img = new Image();
var sprite;

window.onload = function(){
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    stage.addEventListener("stagemousedown",clickCanvas);
    stage.addEventListener("stagemousemove",moveCanvas);

    var data1={
        images:["./img/images/banner1.jpg"],
        frames:{width:30 ,height:30,regX:10,regY:10}
    }
    var data2={
        images:["./img/images/banner2.jpg"],
        frames:{width:30 ,height:30,regX:10,regY:10}
    }
    var data3={
        images:["./img/images/banner3.jpg"],
        frames:{width:30 ,height:30,regX:10,regY:10}
    }
    var data4={
        images:["./img/images/banner4.jpg"],
        frames:{width:30 ,height:30,regX:10,regY:10}
    }
    var data5={
        images:["./img/images/banner5.jpg"],
        frames:{width:30 ,height:30,regX:10,regY:10}
    }
    sprite1  = new createjs.Sprite(new createjs.SpriteSheet(data1));
    sprite2  = new createjs.Sprite(new createjs.SpriteSheet(data2));
    sprite3  = new createjs.Sprite(new createjs.SpriteSheet(data3));
    sprite4  = new createjs.Sprite(new createjs.SpriteSheet(data4));
    sprite5  = new createjs.Sprite(new createjs.SpriteSheet(data5));
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",tick);
}
function tick(e){
    var t = stage.getNumChildren();
    for(var i = t-1;i>-1;i--){
        var s = stage.getChildAt(i);

        s.vY += Math.pow(-1,Math.ceil(Math.random()*10))*(Math.random());
        s.vX += Math.pow(-1,Math.ceil(Math.random()*10))*(Math.random());
        s.x += s.vX * 1.2;
        s.y += s.vY * 1.2;

        s.scaleX = s.scaleY =s.scaleX - s.vS;
        s.alpha += s.vA;

        if(s.alpha <= 0 ||s.scaleX <= 0 || s.y >canvas.height){
            stage.removeChildAt(i);
        }
    }
    stage.update(e);
}

function clickCanvas(e){
    addS( 200,stage.mouseX,stage.mouseY,1,sprite1);
    addS( 200,stage.mouseX,stage.mouseY,1,sprite2);
    addS( 200,stage.mouseX,stage.mouseY,1,sprite3);
    addS( 200,stage.mouseX,stage.mouseY,1,sprite4);
    addS( 200,stage.mouseX,stage.mouseY,1,sprite5);
}

function moveCanvas(e){
    addS( 1,stage.mouseX,stage.mouseY,1,sprite1);
    addS( 1,stage.mouseX,stage.mouseY,1,sprite2);
    addS( 1,stage.mouseX,stage.mouseY,1,sprite3);
    addS( 1,stage.mouseX,stage.mouseY,1,sprite4);
    addS( 1,stage.mouseX,stage.mouseY,1,sprite5);
}

function addS(count,x,y,speed,sprite){
    for(var i = 0;i<count;i++){
        var s = sprite.clone();
        s.x = x;
        s.y = y;
        s.alpha = Math.random() * 0.5 + 0.5;
        s.scaleX = s.scaleY = Math.random() * 0.5; //Ëõ·Å

        var a = Math.PI * 2 * Math.random();
        var v = (Math.random() - 0.5) * speed;
        s.vX = Math.cos(a) * v;
        s.vY = Math.sin(a) * v;
        s.vS = (Math.random() - 1) * 0.01; // scale
        s.vA = -Math.random() * 0.05 - 0.02; // alpha
        stage.addChild(s);
    }
}