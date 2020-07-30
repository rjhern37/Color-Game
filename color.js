// alert("stay winning");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");



var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

colorDisplay.textContent = pickedColor;




for(var i = 0; i < squares.length; i++){
    //Add colors to squares
    squares[i].style.backgroundColor = colors[i]

    //Add click events to square
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct";
           changeColors(clickedColor); 
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
    //change each color to match given color
}


