/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const figu = ["♦", "♥", "♠", "♣"];
const numb = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
const mainCard = document.querySelector(".card");
const optionButton = document.querySelector("#btn");

const altura = document.querySelector("#altura");
const valtura = document.querySelector("#valtura");
const ancho = document.querySelector("#ancho");
const vancho = document.getElementById("#vancho");

var saveCard = [];
var cuenta = 0;

window.onload = function() {
  console.log("Hello Rigo from the console!");

  main();
  interval();
  clickButton();
  submit();

  // las variables se guardan instanciadas
};

var main = () => {
  changeMainCard(getRandomCard(), mainCard);
  saveCard.push(getRandomCard());
  cuenta++;
};

var interval = () => {
  setInterval(function() {
    changeMainCard(getRandomCard(), mainCard);
    saveCard.push(getRandomCard());
  }, 30000);
};

var clickButton = () => {
  mainCard.addEventListener("click", event => {
    changeMainCard(getRandomCard(), mainCard);
    saveCard.push(getRandomCard());
    cuenta++;
    console.log(2);
  });
};

optionButton.addEventListener("mouseover", function() {
  document.querySelector(".button").style.height = "10vw";
  document.querySelector(".button").style.width = "8vw";
});

optionButton.addEventListener("mouseout", function() {
  document.querySelector(".button").style.height = "8vw";
  document.querySelector(".button").style.width = "6vw";
});

function getRandomCard() {
  return [
    Math.floor(Math.random() * figu.length),
    Math.floor(Math.random() * numb.length)
  ];
}

function changeMainCard(variable, lugar) {
  if (variable[0] == 0) {
    if (variable[1] == 0) {
      lugar.style.backgroundImage = "url('Poker/AD.png')";
    } else if (variable[1] == 1) {
      lugar.style.backgroundImage = "url('Poker/2D.png')";
    } else if (variable[1] == 2) {
      lugar.style.backgroundImage = "url('Poker/3D.png')";
    } else if (variable[1] == 3) {
      lugar.style.backgroundImage = "url('Poker/4D.png')";
    } else if (variable[1] == 4) {
      lugar.style.backgroundImage = "url('Poker/5D.png')";
    } else if (variable[1] == 5) {
      lugar.style.backgroundImage = "url('Poker/6D.png')";
    } else if (variable[1] == 6) {
      lugar.style.backgroundImage = "url('Poker/7D.png')";
    } else if (variable[1] == 7) {
      lugar.style.backgroundImage = "url('Poker/8D.png')";
    } else if (variable[1] == 8) {
      lugar.style.backgroundImage = "url('Poker/9D.png')";
    } else if (variable[1] == 9) {
      lugar.style.backgroundImage = "url('Poker/10D.png')";
    } else if (variable[1] == 10) {
      lugar.style.backgroundImage = "url('Poker/JD.png')";
    } else if (variable[1] == 11) {
      lugar.style.backgroundImage = "url('Poker/QD.png')";
    } else {
      lugar.style.backgroundImage = "url('Poker/KD.png')";
    }
  } else if (variable[0] == 1) {
    if (variable[1] == 0) {
      lugar.style.backgroundImage = "url('Poker/AS.png')";
    } else if (variable[1] == 1) {
      lugar.style.backgroundImage = "url('Poker/2S.png')";
    } else if (variable[1] == 2) {
      lugar.style.backgroundImage = "url('Poker/3S.png')";
    } else if (variable[1] == 3) {
      lugar.style.backgroundImage = "url('Poker/4S.png')";
    } else if (variable[1] == 4) {
      lugar.style.backgroundImage = "url('Poker/5S.png')";
    } else if (variable[1] == 5) {
      lugar.style.backgroundImage = "url('Poker/6S.png')";
    } else if (variable[1] == 6) {
      lugar.style.backgroundImage = "url('Poker/7S.png')";
    } else if (variable[1] == 7) {
      lugar.style.backgroundImage = "url('Poker/8S.png')";
    } else if (variable[1] == 8) {
      lugar.style.backgroundImage = "url('Poker/9S.png')";
    } else if (variable[1] == 9) {
      lugar.style.backgroundImage = "url('Poker/10S.png')";
    } else if (variable[1] == 10) {
      lugar.style.backgroundImage = "url('Poker/JS.png')";
    } else if (variable[1] == 11) {
      lugar.style.backgroundImage = "url('Poker/QS.png')";
    } else {
      lugar.style.backgroundImage = "url('Poker/KS.png')";
    }
  } else if (variable[0] == 2) {
    if (variable[1] == 0) {
      lugar.style.backgroundImage = "url('Poker/AH.png')";
    } else if (variable[1] == 1) {
      lugar.style.backgroundImage = "url('Poker/2H.png')";
    } else if (variable[1] == 2) {
      lugar.style.backgroundImage = "url('Poker/3H.png')";
    } else if (variable[1] == 3) {
      lugar.style.backgroundImage = "url('Poker/4H.png')";
    } else if (variable[1] == 4) {
      lugar.style.backgroundImage = "url('Poker/5H.png')";
    } else if (variable[1] == 5) {
      lugar.style.backgroundImage = "url('Poker/6H.png')";
    } else if (variable[1] == 6) {
      lugar.style.backgroundImage = "url('Poker/7H.png')";
    } else if (variable[1] == 7) {
      lugar.style.backgroundImage = "url('Poker/8H.png')";
    } else if (variable[1] == 8) {
      lugar.style.backgroundImage = "url('Poker/9H.png')";
    } else if (variable[1] == 9) {
      lugar.style.backgroundImage = "url('Poker/10H.png')";
    } else if (variable[1] == 10) {
      lugar.style.backgroundImage = "url('Poker/JH.png')";
    } else if (variable[1] == 11) {
      lugar.style.backgroundImage = "url('Poker/QH.png')";
    } else {
      lugar.style.backgroundImage = "url('Poker/KH.png')";
    }
  } else {
    if (variable[1] == 0) {
      lugar.style.backgroundImage = "url('Poker/AC.png')";
    } else if (variable[1] == 1) {
      lugar.style.backgroundImage = "url('Poker/2C.png')";
    } else if (variable[1] == 2) {
      lugar.style.backgroundImage = "url('Poker/3C.png')";
    } else if (variable[1] == 3) {
      lugar.style.backgroundImage = "url('Poker/4C.png')";
    } else if (variable[1] == 4) {
      lugar.style.backgroundImage = "url('Poker/5C.png')";
    } else if (variable[1] == 5) {
      lugar.style.backgroundImage = "url('Poker/6C.png')";
    } else if (variable[1] == 6) {
      lugar.style.backgroundImage = "url('Poker/7C.png')";
    } else if (variable[1] == 7) {
      lugar.style.backgroundImage = "url('Poker/8C.png')";
    } else if (variable[1] == 8) {
      lugar.style.backgroundImage = "url('Poker/9C.png')";
    } else if (variable[1] == 9) {
      lugar.style.backgroundImage = "url('Poker/10C.png')";
    } else if (variable[1] == 10) {
      lugar.style.backgroundImage = "url('Poker/JC.png')";
    } else if (variable[1] == 11) {
      lugar.style.backgroundImage = "url('Poker/QC.png')";
    } else {
      lugar.style.backgroundImage = "url('Poker/KC.png')";
    }
  }
}

function changePlayCard(variable) {
  if (variable[0] == 0) {
    document.querySelector(".card").style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/1200px-Playing_card_diamond_A.svg.png')";
    console.log("Soy un " + figu[variable[0]]);
  } else if (variable[0] == 1) {
    console.log("Soy un " + figu[variable[0]]);
    document.querySelector(".card").style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png)";
  } else if (variable[0] == 2) {
    console.log("Soy un " + figu[variable[0]]);
    document.querySelector(".card").style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/706px-Ace_of_spades.svg.png')";
  } else {
    console.log("Soy un " + figu[variable[0]]);
    document.querySelector(".card").style.backgroundImage =
      "url('https://i.pinimg.com/originals/7f/da/f8/7fdaf8349a53230468944e2f0965f04e.jpg')";
  }
}

//Modificacion Ancho y largo

var submit = () => {
  document.querySelector("#submit").addEventListener("click", () => {
    ancho.addEventListener("input", updateAncho);
    altura.addEventListener("input", updateAltura);

    function updateAltura(e) {
      mainCard.style.height = e + "vw";
      console.log(mainCard.style.height);
    }

    function updateAncho(a) {
      mainCard.style.width = a + "vw";
      console.log(mainCard.style.width);
    }
  });
};

//Parte del modal, sin boostrap

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var nbtn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
nbtn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
