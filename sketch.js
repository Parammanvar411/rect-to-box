var canvas;
var movingrect;
var stablerect1;
var stablerect2;
var stablerect3;
var stablerect4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    movingrect=createSpreite(390,380,50,60);
    stablerect1=createSpreite(400,390,50,60);
    stablerect2=createSpreite(380,370,50,60);
    stablerect3=createSpreite(200,200,50,60);
    stablerect4=createSpreite(300,300,50,60);
    



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    stablerect4=createEdgeSprite();
    stablerect3=createEdgeSprite();
    stablerect2=createEdgeSprite();
    stablerect1=createEdgeSprite();



    //add condition to check if box touching surface and make it box
    drawSprites();
}
