var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "cornflowerblue";
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none"; 
        } 
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "cornflowerblue";
    for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        
    }
});

resetBtn.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from arr
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //reset h1 background color
    h1.style.backgroundColor = "cornflowerblue";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});


colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
    //Add colors to squares
    squares[i].style.backgroundColor = colors[i]

    //Add click events to square
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // console.log(clickedColor, pickedColor);
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
};

function changeColors (color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match gievn color
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
