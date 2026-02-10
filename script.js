const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const music = document.getElementById("bgMusic");
const btnArea = document.getElementById("btnArea");

// autoplay music after first tap (mobile rule)
document.addEventListener("click", () => {
  music.play().catch(()=>{});
}, { once: true });

// YES
yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    <h2>😊 You said YES! 💖</h2>
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE2czJidXhqcTN3ZWNqaWhuczdoZXcyZGFnZGQ4ajRlbTd2YnQ0NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iWgIt7lFCsKuVOhq8z/giphy.gif">
    <p>You just made my day 🌸</p>
  `;
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 }
  });
});

// NO runs away
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

function moveNoButton() {
  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

