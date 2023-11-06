
setTimeout(function () {
    alert('Minęły 2 sekundy!');
}, 2000);

const footerText = document.getElementById("footerText");
let isFooterTextVisible = true;
let intervalId = null;

function toggleFooterText() {
    isFooterTextVisible = !isFooterTextVisible;
    footerText.style.display = isFooterTextVisible ? "inline" : "none";
}

function startFooterInterval() {
    toggleFooterText();
    intervalId = setInterval(toggleFooterText, 1000); // Migaj co 1 sekundę
}



const animateButton = document.getElementById("animateButton");

animateButton.addEventListener("click", () => {

  animateButton.classList.add("animate__animated", "animate__bounce");


  animateButton.addEventListener("animationend", () => {
    animateButton.classList.remove("animate__animated", "animate__bounce");
  });
});

startFooterInterval();
