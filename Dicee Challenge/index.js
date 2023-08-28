var RadNo1 = Math.floor(Math.random() * 6) + 1;
var RDI1 = "dice" + RadNo1 + ".png";
var RIS1 = "images/" + RDI1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RIS1);



var RadNo2 = Math.floor(Math.random() * 6) + 1;
var RDI2 = "dice" + RadNo2 + ".png";
var RIS2 = "images/" + RDI2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", RIS2);



if(RadNo1 < RadNo2){
    document.querySelector("h1").innerHTML = ("🚩 Player 1 Wins ");
}else if(RadNo1 > RadNo2){
    document.querySelector("h1").innerHTML = (" Player 2 Wins 🚩 ");
}else{
    document.querySelector("h1").innerHTML = (" Draw !!");

}