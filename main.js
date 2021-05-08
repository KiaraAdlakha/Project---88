var canvas= new fabric.Canvas("myCanvas");
 
block_width=20;
block_height=20;

player_X=10;
player_Y=10;

player_object="";
block_object="";
function player()
{
    fabric.Image.fromURL("player.png", function(img){
        player_object= img
        ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_Y,
        left:player_X
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(img){
        block_object= img
        ;
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(140);
        block_object.set({
        top:player_Y,
        left:player_X
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    key_pressed=e.keyCode;
    if (e.shiftKey == true && key_pressed == 80) 
    {
        console.log("shift+P is pressed");
        block_height=block_height+10; 
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
    }
    if (e.shiftKey == true && key_pressed == 77) 
    {
        block_height=block_height-10; 
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
    }
    if (key_pressed == 70) 
    {
      new_image("hulk_face.png");
      console.log("f");
    }
    if (key_pressed == 66) 
    {
      new_image("spiderman_body.png");
      console.log("b");
    }
    if (key_pressed == 76) 
    {
      new_image("ironman_legs.png");
      console.log("l");
    }
    if (key_pressed == 82) 
    {
      new_image("thor_right_hand.png");
      console.log("r");
    }
    if (key_pressed == 72) 
    {
      new_image("thor_left_hand.png");
      console.log("h");
    }
    if(key_pressed == 38)
    {
        UP();
        console.log("up");
    }
    if(key_pressed == 40)
    {
        Down();
        console.log("down");
    }
    if(key_pressed == 37)
    {
        Right();
        console.log("right");
    }
    if(key_pressed == 39)
    {
        Left();
        console.log("Left");
    }
}
function UP()
{
    if (player_Y >= 0) 
    {
    player_Y=player_Y-block_height;
    canvas.remove(player_object);
    player();
    }
}
function Down()
{
    if (player_Y <= 450) 
    {
    player_Y=player_Y+block_height;
    canvas.remove(player_object);
    player();
    }
}
function Left()
{
    if (player_X <= 850) 
    {
    player_X=player_X+block_width;
    canvas.remove(player_object);
    player();
    }
}
function Right()
{
    if (player_X >= 0) 
    {
    player_X=player_X-block_width;
    canvas.remove(player_object);
    player();
    }
}