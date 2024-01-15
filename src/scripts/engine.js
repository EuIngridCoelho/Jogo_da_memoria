const state = {
  view:{
    timeLeft: document.querySelector("#time-left")
  },
  values: {
    currentTime: 0
  },
  actions: {
    countUpTimerId: setInterval(countUp, 1000)
  }
}

function countUp() {
  state.values.currentTime++;
  state.view.timeLeft.textContent = state.values.currentTime
}

const emojis = [
    "😍",
    "😍",
    "😂",
    "😂",
    "🥶",
    "🥶",
    "🤡",
    "🤡",
    "👾",
    "👾",
    "👻",
    "👻",
    "🍔",
    "🍔",
    "🚀",
    "🚀",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;

    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkMatch,500);
    }
    console.log(openCards);
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu !");
    }
  }