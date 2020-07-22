const welcomeText = document.getElementById("intro");
const logo = document.querySelector(".logo");
const launchHomepage = document.querySelector(".launch-home")
let introText = ["Welcome", "to","the", "future"];
let index = 0;

let timer = setInterval(nextWord, 1000)
function nextWord(){
    welcomeText.textContent = introText[index];
    if (index < 4){
        console.log(index);
    }
    else if (index == 4){
        welcomeText.style.display = "none";
        logo.classList.add("showLogo");
        launchHomepage.classList.add("showLogo");
    }
    else{
        clearInterval(timer);
    }
    index++;
}

launchHomepage.addEventListener("click", ()=>{
    let honk = new Audio("/assets/sounds/honk.mp3");
    honk.play();
})

nextWord();