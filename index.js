var randomNumber1;
var randomNumber2;
var randomImageSource;
var randomImageSource2;
var randomDiceImage;
var image1; 
 function do_calculation1()
{

      randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  image1 = document.querySelectorAll("img")[0];
 
image1.setAttribute("src", randomImageSource);


}

function do_calculation2()
{
    
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

} 


//If player 1 wins
function display_result()
{
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      }
      else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }
      else {
        document.querySelector("h1").innerHTML = "Draw!";
      }
      
}

 
var press = document.querySelector(".btn2");
press.innerHTML = "START";
 
 press.addEventListener("click",do_this)

 function do_this()
 {

  
    switch(press.innerHTML)
 {
  case  "START": 
    
    press.innerHTML = "Player-1";
    if(press.innerHTML == "Player-1")
    press.addEventListener("click",do_calculation1);
    
    break;

   case   "Player-1":
    press.innerHTML =  "Player-2";
    if(press.innerHTML == "Player-2")
    press.addEventListener("click",do_calculation2);
    break;


    case "Player-2":
        press.innerHTML =  "RESULT";
         if(press.innerHTML == "RESULT" )
         press.addEventListener("click",display_result);
         press.innerHTML =  "START";
         break;
          
         
      
      

         
 }
 
}
 