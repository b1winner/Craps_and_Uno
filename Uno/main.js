let cardsArray = [
    "image/blue/b0.png",
    "image/blue/b1.png",
    "image/blue/b2.png",
    "image/blue/b3.png",
    "image/blue/b4.png",
    "image/blue/b5.png",
    "image/blue/b6.png",
    "image/blue/b7.png",
    "image/blue/b8.png",
    "image/blue/b9.png",
    "image/blue/bNull.png",
    "image/blue/bP2.png",
    "image/blue/bTwist.png",
    "image/green/g0.png",
    "image/green/g1.png",
    "image/green/g2.png",
    "image/green/g3.png",
    "image/green/g4.png",
    "image/green/g5.png",
    "image/green/g6.png",
    "image/green/g7.png",
    "image/green/g8.png",
    "image/green/g9.png",
    "image/green/gNull.png",
    "image/green/gP2.png",
    "image/green/gTwist.png",
    "image/red/r0.png",
    "image/red/r1.png",
    "image/red/r2.png",
    "image/red/r3.png",
    "image/red/r4.png",
    "image/red/r5.png",
    "image/red/r6.png",
    "image/red/r7.png",
    "image/red/r8.png",
    "image/red/r9.png",
    "image/red/rNull.png",
    "image/red/rP2.png",
    "image/red/rTwist.png",
    "image/yellow/y0.png",
    "image/yellow/y1.png",
    "image/yellow/y2.png",
    "image/yellow/y3.png",
    "image/yellow/y4.png",
    "image/yellow/y5.png",
    "image/yellow/y6.png",
    "image/yellow/y7.png",
    "image/yellow/y8.png",
    "image/yellow/y9.png",
    "image/yellow/yNull.png",
    "image/yellow/yP2.png",
    "image/yellow/yTwist.png",
    "image/wild/wild.png",
    "image/wild/wildP4.png",
    "image/blue/b0.png",
    "image/blue/b1.png",
    "image/blue/b2.png",
    "image/blue/b3.png",
    "image/blue/b4.png",
    "image/blue/b5.png",
    "image/blue/b6.png",
    "image/blue/b7.png",
    "image/blue/b8.png",
    "image/blue/b9.png",
    "image/blue/bNull.png",
    "image/blue/bP2.png",
    "image/blue/bTwist.png",
    "image/green/g0.png",
    "image/green/g1.png",
    "image/green/g2.png",
    "image/green/g3.png",
    "image/green/g4.png",
    "image/green/g5.png",
    "image/green/g6.png",
    "image/green/g7.png",
    "image/green/g8.png",
    "image/green/g9.png",
    "image/green/gNull.png",
    "image/green/gP2.png",
    "image/green/gTwist.png",
    "image/red/r0.png",
    "image/red/r1.png",
    "image/red/r2.png",
    "image/red/r3.png",
    "image/red/r4.png",
    "image/red/r5.png",
    "image/red/r6.png",
    "image/red/r7.png",
    "image/red/r8.png",
    "image/red/r9.png",
    "image/red/rNull.png",
    "image/red/rP2.png",
    "image/red/rTwist.png",
    "image/yellow/y0.png",
    "image/yellow/y1.png",
    "image/yellow/y2.png",
    "image/yellow/y3.png",
    "image/yellow/y4.png",
    "image/yellow/y5.png",
    "image/yellow/y6.png",
    "image/yellow/y7.png",
    "image/yellow/y8.png",
    "image/yellow/y9.png",
    "image/yellow/yNull.png",
    "image/yellow/yP2.png",
    "image/yellow/yTwist.png",
    "image/wild/wild.png",
    "image/wild/wildP4.png",
]
let aiDeck = []
let playerDeck = []
let usedDeck = []
let currentPlayerCards = 0
let aiCards = 0
let turn = "ai"
start();
function updateScreen() {
    let aiText = document.getElementById("aiText")
    aiText.innerHTML = "Other Player Has: " + aiCards + " Cards"
    let turnText = document.getElementById("turn")
    turnText.innerHTML = turn + "'s turn"
}
function getCard(playerType) {
    if (playerType==="ai") {
        aiDeck.push(cardsArray.pop())
        aiCards+=1
    }
    else {
        playerDeck.push(cardsArray.pop())
        currentPlayerCards+=1
        playerType = "player"
    }
    console.log("Card given to "+playerType)
}
function playCard(index) {
    let card = "placeholder"
    if (turn === "ai") {
        card = aiDeck [index]
    }
    else {
        card = playerDeck[index]
    }
    if (checkCard(card)) {
        if (turn==="ai") {
            usedDeck.push(aiDeck[index])
            aiDeck.splice(index,1)
            aiCards-=1


        }
        else {
            usedDeck.push(playerDeck[index])
            playerDeck.splice(index,1)
            currentPlayerCards-=1
            renderPlayerCards()

        }
        renderDeckCard()
        checkWin()
        let cardSpec = cardSpecs(card)
        if (cardSpec[0] === "skip"||cardSpec[0]==="reverse"||cardSpec[0]==="pickUp") {
            window.alert("Turn Skipped")
        }
        else {
            if (turn === "ai") {
                turn = "player"
            }
            else {
                turn = "ai"
            }
        }
    }
    else {
        window.alert("Invalid Card")
    }
}
function checkCard(playedCard) {
    let playCard = cardSpecs(playedCard)
    let deckCard = cardSpecs(usedDeck[usedDeck.length-1])
    return playCard[2] === deckCard[2] || playCard[2] === "wild" || playCard[1] === deckCard[1];
}
function cardSpecs(card) {
    let color = "unknown"
    let num = -1
    let pickUp = false
    let skip = false
    let reverse = false
    let type = "number"

    if (card.contains("blue")) {
        color = "blue"
    }
    else if (card.contains("green")) {
        color = "green"
    }
    else if (card.contains("red")) {
        color = "red"
    }
    else if (card.contains("yellow")) {
        color = "yellow"
    }
    else if (card.contains("wild")) {
        color = "wild"
    }
    if (card.contains("P4")) {
        pickUp = true
        num = 4
        type = "pickUp"
    }
    else if (card.contains("P2")) {
        pickUp = true
        num = 2
        type = "pickUp"
    }
    else if (card.contains("Null")) {
        skip = true
        type = "skip"
    }
    else if (card.contains("Twist")) {
        reverse = true
        type = "reverse"
    }
    return [type, num, color]
}
function checkWin() {
    if (aiDeck.length===0) {
        window.alert("You Lose")
    }
    else if (playerDeck.length===0) {
        window.alert("You Win!")
    }
}
function shuffleDeck() {
    cardsArray.sort(() => Math.random() - 0.5)
}
function start() {
    shuffleDeck()
    for (let i = 0; i<7; i++) {
        getCard("ai")
        getCard("player")
    }
    usedDeck.push(cardsArray.pop())
    renderDeckCard()
    updateScreen()
}
function renderPlayerCards() {

}
function renderDeckCard() {
    let deck = document.getElementById("deck")
    console.log(usedDeck)
    console.log(usedDeck[usedDeck.length-1])
    deck.src = usedDeck[usedDeck.length-1]
    deck.alt = usedDeck[usedDeck.length-1]
}