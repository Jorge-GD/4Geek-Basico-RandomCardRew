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
  //write your code here
  console.log("Hello Rigo from the console!");

  main();
  interval();
  clickButton();
  submit();
};

var main = () => {
  let randi = getRandomCard();
  changeMainCard(randi);
  saveCard.push(randi);
  cuenta++;
};

var interval = () => {
  setInterval(function() {
    let randi = getRandomCard();
    changeMainCard(randi);
    saveCard.push(randi);
  }, 30000);
};

var clickButton = () => {
  let randi = getRandomCard();
  mainCard.addEventListener("click", event => {
    changeMainCard(randi);
    saveCard.push(randi);
    cuenta++;
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

function getRandom(pepito) {
  return Math.floor(Math.random() * pepito.length);
}

function getRandomCard() {
  let card = [getRandom(figu), getRandom(numb)];
  return card;
}

function changeMainCard(varible) {
  if (varible[0] == 0) {
    mainCard.style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/1200px-Playing_card_diamond_A.svg.png')";
    console.log("Soy un " + figu[varible[0]]);
  } else if (varible[0] == 1) {
    console.log("Soy un " + figu[varible[0]]);
    mainCard.style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png)";
  } else if (varible[0] == 2) {
    console.log("Soy un " + figu[varible[0]]);
    mainCard.style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/706px-Ace_of_spades.svg.png')";
  } else {
    console.log("Soy un " + figu[varible[0]]);
    mainCard.style.backgroundImage =
      "url('https://i.pinimg.com/originals/7f/da/f8/7fdaf8349a53230468944e2f0965f04e.jpg')";
  }
}

function changePlayCard(varible) {
  if (varible[0] == 0) {
    document.querySelector(".card").style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/1200px-Playing_card_diamond_A.svg.png')";
    console.log("Soy un " + figu[varible[0]]);
  } else if (varible[0] == 1) {
    console.log("Soy un " + figu[varible[0]]);
    document.querySelector(".card").style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png)";
  } else if (varible[0] == 2) {
    console.log("Soy un " + figu[varible[0]]);
    document.querySelector(".card").style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/706px-Ace_of_spades.svg.png')";
  } else {
    console.log("Soy un " + figu[varible[0]]);
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
