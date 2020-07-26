// Define the variables for the introduction
const welcomeText = document.getElementById("intro");
const logo = document.querySelector(".logo");
const launchHomepage = document.querySelector(".launch-home");
const homePage = document.querySelector(".home");
const missionStatement = document.querySelector(".mission_statement");
let introText = ["Welcome", "to","the", "future"];
let index = 0;

console.log("hello");

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
        logo.classList.add("reveal");
        launchHomepage.classList.add("reveal");
    }
    else{
        // Break the loop
        clearInterval(timer);
    }
    index++;
}

// 2 functions to be called when the continue button is pressed
function hideGoose(){
    logo.classList.remove("reveal");
    launchHomepage.classList.remove("reveal");
}
function showNav(){
    homePage.classList.add("reveal");
    missionStatement.classList.add("reveal");

    // Create an image array for the front page
    let imageArray = [
        { image: "/assets/img/language_array/python.jpg", text: "Python" },
        { image: "/assets/img/language_array/java.jpg", text: "Java" },
        { image: "/assets/img/language_array/javascript.jpg", text: "Javascript" },
        { image: "/assets/img/language_array/php.png", text: "PHP" },
    ];
    const htmlImage = document.getElementById("image_array");
    let current = 0;
    htmlImage.src = imageArray[0].image;
    let loop_images = setInterval(loopThrough, 5000);
    function loopThrough(){
        current++
        if (current == imageArray.length){
            current = 0;
        }
        htmlImage.src = imageArray[current].image;
        document.querySelector(".lessons").textContent = `You could learn: ${imageArray[current].text}`;
    }
}
// Add a goose sound effect when the href is clicked
launchHomepage.addEventListener("click", ()=>{
    let honk = new Audio("/assets/sounds/honk.mp3");
    honk.play();
    hideGoose();
    showNav();
})

nextWord();

