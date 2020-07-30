// alert("stay winning");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");



var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //Add colors to squares
    squares[i].style.backgroundColor = colors[i]

    //Add click events to square
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        //compare color to picked color
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct";
           changeColors(clickedColor); 
           h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "cornflowerblue";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors (color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];

}

function generateRandomColors(num){
    //make arr
    var arr = []
    //add num colors to arr
    for(var i = 0; i < num; i++){
        //push into arr
        arr.push(randomColor());
    }
    //return arr
    return arr;
}

function randomColor(){
    //pick red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
