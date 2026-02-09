const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const music = document.getElementById("bgMusic");
const btnArea = document.getElementById("btnArea");

// autoplay music after first tap
document.addEventListener("click", () => {
  music.play().catch(()=>{});
}, { once: true });

// YES click
yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    <h2>😊 You said YES! 💖</h2>
    <img src="<div class="tenor-gif-embed" data-postid="11951420229067864601" data-share-method="host" data-aspect-ratio="0.913655" data-width="100%"><a href="https://tenor.com/view/cute-gif-11951420229067864601">Cute Sticker</a>from <a href="https://tenor.com/search/cute-stickers">Cute Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>">
    <p>You just made my day 🌸</p>
  `;
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 }
  });
});

// NO button runs away on touch
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

function moveNoButton() {
  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = ${randomX}px;
  noBtn.style.top = ${randomY}px;
}