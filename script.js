const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".button");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".noo");
const myImg = document.querySelector(".img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick)

function handleYesClick() {
  titleElement.innerHTML = "Thank You!!! :)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function handleNoClick() {
  noCount++;
  titleElement.innerHTML = generateMessage(noCount);
  buttonsContainer.classList.add("hidden");
  const imageIndex = Math.min(noCount, MAX_IMAGES);
  changeImage(imageIndex);
  if (noCount === MAX_IMAGES) {
    play = false;
  }
}

function changeImage(image) {
  myImg.src = `img/elysia-${image}.jpg`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "What about now?",
    "You break my heart :(",
    "Pleaseeeee :(",
    "I'm gonna cry...",
    "Pls press yes",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}
