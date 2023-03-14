//AGGIUNGE IL METODO CHE FA SENTIRE IL SUONO E ANIMAZIONE DA TASTIERA
document.addEventListener //metodo di document, document è il documento vuoto
(
  "keypress", function(event) //"keypress" è un parametro di default, funzione di reazione(evento) cioè in output
  {
     console.log(event); //risultato log evento ricevuto
       makeSound(event.key); //funzione nostra creata per far sentire il suono quando clicco il tasto
       buttonAnimation(event.key); //funzione nostra creata per far vedere l'animazione quando clicco il tasto
  }
);
//______________________________________________________________________________________________________
var pulsantiDrum = document.querySelectorAll(".drum"); //document.querySelectorAll(".drum") restituisce un'array di 7 elementi
// <button class="w drum">w</button> ha 2 classi, non una: una classe "w" e una "drum"

for (var i = 0;i<pulsantiDrum.length;i++)   //serve per il click da mouse
{
  pulsantiDrum[i].addEventListener//per ogni elemento di pulsantiDrum aggiungi un
  (
    "click", function(event) //evento predefinito,
    {
      var btnInnerHTML = this.innerHTML; //innerHTML è un metodo che mi restituisce il contenuto del tag HTML, in questo caso w
      makeSound(btnInnerHTML);//funzione nostra creata per far sentire il suono quando clicco sull'immagine
      buttonAnimation(btnInnerHTML);//funzione nostra creata per far vedere l'animazione quando clicco sull'immagine
    }
  );
}
//_______________________________________________________________________________________________________
function buttonAnimation(currentKey) //parametro w , a , s
{
  var activeButton = document.querySelector("." + currentKey); //.w
  activeButton.classList.add("pressed"); //aggiunge la classe .w al tag che lo contiene, in questo caso button

  setTimeout(function(){activeButton.classList.remove("pressed");},100); //100 millisecondi = 0.1 secondi, 1000 millisecondi = 1 secondo
} //setTimeout = funzione standard di javascript
//activeButton.classList.remove("pressed") rimuovi il tag .w dopo 100 millisecondi
//_________________________________________________________________________________________________________
function makeSound(key)
{
switch (key)
  {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3"); //creo un oggetto audio
    tom1.play();
    break;
  case 'a':
    var tom2 = new Audio("sounds/tom-2.mp3"); //creo un oggetto audio
    tom2.play();
    break;
  case "s":
    var tom3 = new Audio("sounds/tom-3.mp3"); //creo un oggetto audio
    tom3.play();
    break;
  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3"); //creo un oggetto audio
    tom4.play();
    break;
  case "j":
    var crash = new Audio("sounds/crash.mp3"); //creo un oggetto audio
    crash.play();
    break;
  case "k":
    var kick_ass = new Audio("sounds/kick-bass.mp3"); //creo un oggetto audio
    kick_ass.play();
    break;
  case "l":
    var snare = new Audio("sounds/snare.mp3"); //creo un oggetto audio
    snare.play();
    break;
  default:
  console.log(key);
  }
}
