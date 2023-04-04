let cards = [ ] ;
 
let sum = 0 ;
 let hasblackjack = false ;
 let isAlive =false ;
 
 let message = "" ; 

 let sumEl= document.getElementById ("sum-el")
 let messageEl = document.getElementById("message-el")
 let cardsEl= document.getElementById("cards-el")

let player = {
    name:"pranav",
    chips :130
}


let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name  + " " + ": $" +player.chips


 function getRandomCard(){
let random= Math.floor(Math.random()*13) + 1
if(random > 10){
    return 10
}
else if (random==1){
    return 11
}
else {
    return random
} 

 }
console.log (cards)

function startgame() {
   isAlive =true
   let firstcard= Math.floor(Math.random()*13)
   let secondcard= Math.floor(Math.random()*13)
   cards =[ firstcard, secondcard ]
   sum=firstcard + secondcard
   rendergame()
}
 
 function rendergame() {

    cardsEl.textContent = "Cards :"   ; 

    for ( let i=0 ; i< cards.length ;i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum :" +sum ; 

    if (sum<=20){
        message="Do you want to draw a new card? 🙂" ;
        }
        else if (sum===21) {
            message= "Wohoo! You've got Blackjack! 🥳" ;
            hasblackjack = true ;
        }
        else {
            message ="You're out of the game! 😭" ;
            isAlive = false ;
        }
        
       messageEl.textContent =message ;
      
 }

   
    

  

 function newcard () {
if(isAlive==true && hasblackjack==false) 
{
    
    let card = getRandomCard() ;
    sum += card ;

    cards.push(card)
    console.log(cards)
    

    rendergame();
 }

 }
