var random = document.getElementById("random");

const scoreBoard = document.getElementById("scoreBoard");
const buttons = document.getElementById("buttons");
const scorePlayer1 = document.getElementById("scoreP1");
const scorePlayer2 = document.getElementById("scoreCP");
var button2 = document.getElementById("button2");
const buttonWater = document.getElementById("buttonWater");
const buttonFire = document.getElementById("buttonFire");
const buttonPlant = document.getElementById("buttonPlant");
const imageCP = document.getElementById("imageCP");
const imagePlayer = document.getElementById("imagePlayer");
buttons.addEventListener("click", function (e) {
  var elements = [{ label: "Water" }, { label: "Fire" }, { label: "Plant" }];
  e.stopPropagation();
  var numMax = elements.length;
  var randomNumber = Math.floor(Math.random() * numMax);
  randomElement = elements[randomNumber].label;

  // imageCP.src = `/imagenes/${randomElement.toLowerCase()}.png`;
  // randomButton=elements[randomNumber].button
  if (e.target.id === "Water" || e.target.id === "buttonWater") {
    imagePlayer.src = "/imagenes/water.png";
    imageCP.src = `/imagenes/${randomElement.toLowerCase()}.png`;
    if (randomElement === "Fire") {
      scorePlayer1.innerHTML++;
    }
    if (randomElement === "Plant") {
      scorePlayer2.innerHTML++;
    }

    if (randomElement === "Water") {
    }
  }

  if (e.target.id === "Fire" || e.target.id === "buttonFire") {
    imagePlayer.src = "/imagenes/fire.png";
    imageCP.src = `/imagenes/${randomElement.toLowerCase()}.png`;
    if (randomElement === "Plant") {
      scorePlayer1.innerHTML++;
    }

    if (randomElement === "Water") {
      scorePlayer2.innerHTML++;
    }

    if (randomElement === "Fire") {
    }
  }

  if (e.target.id === "Plant" || e.target.id === "buttonPlant") {
    imagePlayer.src = "/imagenes/plant.png";
    imageCP.src = `/imagenes/${randomElement.toLowerCase()}.png`;
    if (randomElement === "Water") {
      scorePlayer1.innerHTML++;
    }
    if (randomElement === "Fire") {
      scorePlayer2.innerHTML++;
    }

    if (randomElement === "Plant") {
    }
  }
});
