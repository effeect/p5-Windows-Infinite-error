// EffeectFTW Video Code - How to create Infinite Windows Error Log

//Preloading Function

let trigger = false;

function preload()
{
    img = loadImage('error.png');
}

//The setup function only runs at startup
function setup()
{
    createCanvas(innerWidth,innerHeight);
    background(0);
    //Sets Framerate
    frameRate(144);
}

//The draw function runs at the desired framerate
function draw()
{
    if(trigger)
        {
            background(0);
        }
    image(img,mouseX,mouseY);
    
}

function mousePressed()
{
    trigger = !trigger;
}