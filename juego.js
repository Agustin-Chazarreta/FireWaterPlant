var random = document.getElementById("random");
const spaceRandom = document.getElementById("spaceRandom");
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

  var numMax = elements.length;
  var randomNumber = Math.floor(Math.random() * numMax);
  randomElement = elements[randomNumber].label;

  imageCP.src = `/imagenes/${randomElement.toLowerCase()}.png`;
  // randomButton=elements[randomNumber].button
  if (e.target.id === "Water" || e.target.id === "buttonWater") {
    imagePlayer.src = "/imagenes/water.png";
    if (randomElement === "Fire") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, you win. `;
      scorePlayer1.innerHTML++;
    }
    if (randomElement === "Plant") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, you loose. `;
      scorePlayer2.innerHTML++;
    }

    if (randomElement === "Water") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, it's a tie. `;
    }
  }

  if (e.target.id === "Fire" || e.target.id === "buttonFire") {
    imagePlayer.src = "/imagenes/fire.png";
    if (randomElement === "Plant") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, you win. `;
      scorePlayer1.innerHTML++;
    }

    if (randomElement === "Water") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, you loose.  `;
      scorePlayer2.innerHTML++;
    }

    if (randomElement === "Fire") {
      spaceRandom.innerHTML = `Computer choose ${randomElement},  it's a tie. `;
    }
  }

  if (e.target.id === "Plant" || e.target.id === "buttonPlant") {
    imagePlayer.src = "/imagenes/plant.png";
    if (randomElement === "Water") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, you win. `;
      scorePlayer1.innerHTML++;
    }
    if (randomElement === "Fire") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, you loose. `;
      scorePlayer2.innerHTML++;
    }

    if (randomElement === "Plant") {
      spaceRandom.innerHTML = `Computer choose ${randomElement}, it's a tie. `;
    }
  }
});
