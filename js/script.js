// document.getElementById("clickMe").onclick = rollDice;

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/dice1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/dice2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/dice3.png';


imgArray[3] = new Image();
imgArray[3].src = 'images/dice4.png';


imgArray[4] = new Image();
imgArray[4].src = 'images/dice5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/dice6.png';



function rollDice() {

     var number = imgArray.length;
     var dice1 = Math.floor(Math.random() * number);
     var dice2 = Math.floor(Math.random() * number);

    document.getElementById("p1").src = imgArray[dice1].src; 
    document.getElementById("p2").src = imgArray[dice2].src;


     if (dice1 === dice2) {

         document.querySelector("h2").innerHTML="Deuce !";
         console.log("Deuce!");
         console.log(dice1);
         console.log(dice2);
         
     }
      else if (dice2 > dice1 || dice1 < dice2) {
          document.querySelector("h2").innerHTML="Player 2 Wins !";
          console.log("Player2 WINS!");
          console.log(dice1);
          console.log(dice2);

     } else if (dice1 > dice2 || dice2 < dice1){
          console.log(dice1);
          console.log(dice2);

          document.querySelector("h2").innerHTML="Player 1 Wins !";
          console.log(" Player 1 WINS!");
          console.log(dice1);
          console.log(dice2);
                

          }
}


          //check for Navigation Timing API support

          if (window.performance) {
               // console.info("window.performance works fine on this browser");
          }
          console.info(performance.type);
          if (performance.type == performance.TYPE_RELOAD) {
               // console.info( "This page is reloaded" );
               rollDice();
          } else {
               // console.info( "This page is not reloaded");
          }