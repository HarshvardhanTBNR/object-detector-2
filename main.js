video="";
status="";

function preload(){
video=createVideo("video.mp4");
video.hide();
}
    
function setup(){
canvas=createCanvas(500,300);
canvas.position(430,300);
}

function draw(){
image(video,0,0,500,300);
}

function start(){
object_detector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded !");
video.speed(1);
video.volume(0);
video.loop();
}