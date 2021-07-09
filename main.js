img="";
status="";
function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(664,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status-detectingObjects";
}

function modelLoaded()
{
console.log("modelLoaded");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
 if (error){
     console.log(error);
 }
 console.log(results)
}

function draw()
{
image(img,0,0,664,420);
fill("#FF0000");
text("dog",45,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
fill("#fff2ba");
text("cat",400,120);
textSize(25);
noFill();
stroke("#4ab9e8");
rect(300,60,300,350);
}