difference = 0;
leftwristX = 0;
rightwristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(700, 600);
    canvas.position(560, 110);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristx = " + leftwristX + "rightwristx = " + rightwristX + "difference = " + difference);
    }
}
function modelLoaded()
{
    console.log("poseNet Model is Loaded");
}
function draw()
{
    background('aqua');
    document.getElementById("Fontsize").innerHTML = "The font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#90EE90');
    text("Yaswa" , 50 , 400 );
}