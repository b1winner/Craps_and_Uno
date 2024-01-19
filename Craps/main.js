let wins = 0;
let currentGame = 0;
let run = false
let winLose="none"

function roll() {
    let d1 = getRndInteger()
    let d2 = getRndInteger()
    let roll = d1+d2
    winCheck(roll)
    if (run===false) {
        currentGame = roll
        let firstRollUpdate = document.getElementById("first_roll")
        firstRollUpdate.innerHTML = "First Roll: " + currentGame
        run=true
    }

    //update values
    diceUpdate(d1,d2)
    console.log(d1, d2)
    let valueUpdate = document.getElementById("roll_value")
    valueUpdate.innerHTML = "Roll Value: " + roll

    setInterval(winLoseFunct,500)



}
function winLoseFunct() {
    if (winLose !== null) {
        if (winLose === "win") {
            wins+=1
            window.alert("You win! You've won "+wins+" times!")
            console.log("Win")
        }
        else {
            window.alert("You Lose :(")
            console.log("Lose")
        }
        winLose = null
        run = false
    }
}
function diceUpdate(d1value,d2value) {
    let d1 = document.getElementById("dice")
    let d2 = document.getElementById("dice2")
    switch (d1value){
        case 1:
            d1.alt = "1";
            d1.src = "image/1.jpg";
            break
        case 2:
            d1.alt = "2"
            d1.src = "image/2.jpg"
            break
        case 3:
            d1.alt = "3"
            d1.src = "image/3.jpg"
            break
        case 4:
            d1.alt = "4"
            d1.src = "image/4.jpg"
            break
        case 5:
            d1.alt = "5"
            d1.src = "image/5.jpg"
            break
        case 6:
            d1.alt = "6"
            d1.src = "image/6.jpg"
            break
    }
    switch (d2value){
        case 1:
            d2.alt = "1";
            d2.src = "image/1.jpg";
            break
        case 2:
            d2.alt = "2"
            d2.src = "image/2.jpg"
            break
        case 3:
            d2.alt = "3"
            d2.src = "image/3.jpg"
            break
        case 4:
            d2.alt = "4"
            d2.src = "image/4.jpg"
            break
        case 5:
            d2.alt = "5"
            d2.src = "image/5.jpg"
            break
        case 6:
            d2.alt = "6"
            d2.src = "image/6.jpg"
            break
    }
}
function getRndInteger() {
    return Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
}
function winCheck(roll) {
    if (run===false&&(roll===7||roll===11)) {
        winLose = "win"
    }
    else if (run===false&&(roll===2||roll===3||roll===12)) {
        winLose = "lose"
    }
    if (run===true&&roll === currentGame) {
        winLose = "win"
    }
    else if (run===true&&roll === 7) {
        winLose = "lose"
    }

}