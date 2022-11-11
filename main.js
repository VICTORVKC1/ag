const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

var roverX = 10;
var roverY = 10;

const borderRight = canvas.width - roverWidth;
const borderBottom = canvas.height - roverHeight;
const backgroundList=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','mars,jpg'];
const randomNumber=Math.floor(Math.random()*5);
console.log(randomNumber);
const backgroundImage =backgroundList[randomNumber];
const roverImage = "rover.png";

var backgroundImgTag, roverImgTag;

function add(){
backgroundImgTag=new Image();
backgroundImgTag.src=backgroundImage;
backgroundImgTag.onload=uplodBackground;

roverImgTag=new Image();
roverImgTag.src=roverImage;
roverImgTag.onload=uplodRover;

}
function uplodBackground(){
ctx.drawImage(backgroundImgTag, 0,0,canvas.width,canvas.height);
}
function uplodRover(){
    ctx.drawImage(roverImgTag, roverX,roverY,roverWidth,roverHeight);
    
    }
    window.addEventListener("keydown", keyDown);
    function keyDown (e) {
        const passo = 10;
        const keyPressed = e.keyCode;
        console.log(e.key + " -> " + keyPressed);
        if(keyPressed == 37) {
            // esquerda
            console.log('esquerda');
            if(roverX>0){
            roverMove(-passo,0);
            }
            
        } else if (keyPressed == 38) {
            // cima
            console.log('cima');
            if(roverY>0){
                roverMove(0,-passo);
                }
        } else if (keyPressed == 39) {
            // direita
            console.log('direita');
            if(roverX<=borderRight){
                roverMove(passo,0);
                }
        } else if (keyPressed == 40) {
            // baixo
            console.log('baixo');
            if(roverY<=borderBottom){
                roverMove(0,passo);
                }
            
        }
    }
    function roverMove(X,Y)
    {
    roverX += x;
    roverY += y;
    uplodBackground();
    uplodRover();
    }
    