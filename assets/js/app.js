// Define the variables for the introduction
const welcomeText = document.getElementById("intro");
const logo = document.querySelector(".logo");
const launchHomepage = document.querySelector(".launch-home");
const homePage = document.querySelector(".home");
let introText = ["Welcome", "to","the", "future"];
let index = 0;

// Set an interval to connect with the animation timing
let timer = setInterval(nextWord, 1000)

// The main function to loop through the text array
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
        // Break the loop
        clearInterval(timer);
    }
    index++;
}

// 2 functions to be called when the continue button is pressed
function hideGoose(){
    logo.classList.remove("showLogo");
    launchHomepage.classList.remove("showLogo");
}
function showNav(){
    homePage.classList.add("showLogo");
}
// Add a goose sound effect when the href is clicked
launchHomepage.addEventListener("click", ()=>{
    let honk = new Audio("/assets/sounds/honk.mp3");
    honk.play();
    hideGoose();
    showNav();
})

nextWord();


