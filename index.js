
let numOfDrums = document.querySelectorAll('.drum').length;
// Detecting Btn press

for (let i = 0; i  < numOfDrums; i++) {
    
   document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let buttonHTML = this.textContent;
    
      
      makeSounds(buttonHTML);
           
   }    

)};
   

   
//Detecting Keydown Press



document.addEventListener('keydown', function(e) {
   console.log(e);
   makeSounds(e.key);

});


function makeSounds(key) {
   switch (key) {
      case "w": 
         let crash = new Audio("./sounds/crash.mp3");
         crash.play();
         break;

      case "a":
         let kickBass = new Audio("./sounds/kick-bass.mp3");
         kickBass.play();
         break; 
      
      case "s":
         let snare = new Audio("./sounds/snare.mp3");
         snare.play();
         break;

      case "d":
         let tom1 = new Audio("./sounds/tom-1.mp3");
         tom1.play();
         break;

      case "j":
         let tom2 = new Audio("./sounds/tom-2.mp3");
         tom2.play();
         break;

      case "k":
         let tom3 = new Audio("./sounds/tom-3.mp3");
         tom3.play();
         break;

      case "l":
         let tom4 = new Audio("./sounds/tom-4.mp3");
         tom4.play();
         break;



      default: console.log(buttonHTML);
   }
}