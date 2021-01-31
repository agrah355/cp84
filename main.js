var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");
var background_img="racing.jpg";
var car_img="car1.png";
var car1_img="car1.png";
var car_width=100;
var car_height=90;
var car1_width=100;
var car1_height=90;
var car_x=10;
var car_y=10;
var car1_x=10;
var car1_y=80;
var background_img_tag;
var car_img_tag;
var car1_img_tag;
function add(){
    background_img_tag=new Image();
    background_img_tag.src=background_img;
    background_img_tag.onload=upload_bg;

    car_img_tag=new Image();
    car_img_tag.src=car_img;
    car_img_tag.onload=upload_car;

    car1_img_tag=new Image();
    car1_img_tag.src=car1_img;
    car1_img_tag.onload=upload_car1;
}
function upload_bg(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function upload_car(){
    ctx.drawImage(car_img_tag,car_x,car_y,car_width,car_height);
}
function upload_car1(){
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="39"){
        right();
        console.log("right");
    }
    if (keyPressed=="37"){
        left();
        console.log("left");
    }
}
if (keyPressed=="38"){
    up();
    console.log("up");
}

if (keyPressed=="40"){
    down();
    console.log("down");
}

function left(){
    if (car_x>=0){
        car_x=car_x-10;
        console.log("when left arrow is pressed, x= "+car_x+", y= "+car_y);
        upload_bg();
        upload_car();
    }
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("when left arrow is pressed, x= "+car1_x+", y= "+car1_y);
        upload_bg();
        upload_car1();
    }
}
function up(){
    if (car_y>=0){
        car_y=car_y-10;
        console.log("when up arrow is pressed, x= "+car_x+", y= "+car_y);
        upload_bg();
        upload_car();
    }
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up arrow is pressed, x= "+car1_x+", y= "+car1_y);
        upload_bg();
        upload_car1();
    }
}
function down(){
    if (car_y<=600){
        car_x=car_x+10;
        console.log("when right arrow is pressed, x= "+car_x+", y= "+car_y);
        upload_bg();
        upload_car();
    }
    if (car1_y<=600){
        car1_y=car1_y+10;
        console.log("when right arrow is pressed, x= "+car1_x+", y= "+car1_y);
        upload_bg();
        upload_car1();
    }
}