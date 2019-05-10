let num = 6
var pickedColor
let colors = []
let squares = document.querySelectorAll(".square")
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.getElementById("message")
let resetBtn = document.getElementById("newColors")
let header = document.querySelector("#header")
let modeButtons = document.querySelectorAll(".mode")



init()

function init(){
    setUpModeButtons()
    setUpSquares()
    reset(num)
}

function setUpModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? num = 3 : num = 6
            reset(num)
        })
    }
}

function setUpSquares(){
    for (let i = 0; i < num; i++) {
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct"
                resetBtn.textContent = "Play Again?"
                for (let i = 0; i < colors.length; i++) {
                    squares[i].style.backgroundColor = pickedColor;
                }
                header.style.backgroundColor = pickedColor
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset(num){
    colors = randomColor(num)
    messageDisplay.textContent = ""
    header.style.backgroundColor = "steelblue"
    resetBtn.textContent = "New Colors"
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        } else{
            squares[i].style.display = "none"
        }
    }
}

function randomColor(num){
    arr = []
    for(let i = 0; i < num; i++ ){
        arr.push(`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`)
    }
    
    pickedColor = arr[~~(Math.random() * arr.length)]
    colorDisplay.textContent = pickedColor
    return arr
}

function randomNumber(){
    return ~~(Math.random() * 256)
}


resetBtn.addEventListener("click",function(){
    reset(num)
})

